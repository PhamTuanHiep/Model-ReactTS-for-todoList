import { Button, Form, Input, InputNumber } from "antd";

import "./Login.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import instance from "../../apis/apis";
import { UserApis } from "../users/constants/constant.endpoint";
// import { doLogin } from "./constants/userSlide";
import { toast } from "react-toastify";
import { doLogin } from "./constants/accountSlice";

interface User {
  id: string;
  username: string;
  password:string,
  email: string;
  phone: string;
  image:string
  }

const Login = () => {
  // handle validation
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */
  const typeTemplate = "'${label}' is not a valid ${type}";

  const validateMessages = {
    default: "Validation error on field '${label}'",
    required: "'${label}' is required",
    enum: "'${label}' must be one of [${enum}]",
    whitespace: "'${label}' cannot be empty",
    date: {
      format: "'${label}' is invalid for format date",
      parse: "'${label}' could not be parsed as date",
      invalid: "'${label}' is invalid date",
    },
    types: {
      string: typeTemplate,
      method: typeTemplate,
      array: typeTemplate,
      object: typeTemplate,
      number: typeTemplate,
      date: typeTemplate,
      boolean: typeTemplate,
      integer: typeTemplate,
      float: typeTemplate,
      regexp: typeTemplate,
      email: typeTemplate,
      url: typeTemplate,
      hex: typeTemplate,
    },
    string: {
      len: "'${label}' must be exactly ${len} characters",
      min: "'${label}' must be at least ${min} characters",
      max: "'${label}' cannot be longer than ${max} characters",
      range: "'${label}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${label}' must equal ${len}",
      min: "'${label}' cannot be less than ${min}",
      max: "'${label}' cannot be greater than ${max}",
      range: "'${label}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${label}' must be exactly ${len} in length",
      min: "'${label}' cannot be less than ${min} in length",
      max: "'${label}' cannot be greater than ${max} in length",
      range: "'${label}' must be between ${min} and ${max} in length",
    },
    pattern: {
      mismatch: "'${label}' does not match pattern ${pattern}",
    },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [users,setUsers]=useState<User[]>(
    [{
        id: '',
        username: "",
        password: "",
        email: "",
        phone: "",
        image:""
    }]
  )

  useEffect(()=>{
      getUsers()
  },[])

  const getUsers = async () => {
    const res = await instance.get(`${UserApis.USERS}`, {});
    const dataUsers=res.data
    setUsers(dataUsers)
    // console.log("res:",res);
    // console.log("dataUsers:",dataUsers)
  };
  const onFinish = async (values: any) => {
    const res = users.find((user) => {
      return user.email === email && user.password === password;
      // return user.email === values.user.email && user.password === values.user.password;
    },);

    if (res == undefined) {
      toast.error("account login failed")
    } else {
      console.log(res)
      const currentIdUser=res.id
        localStorage.setItem("currentIdUser", currentIdUser);
        // localStorage.setItem("currentUser", res);

      // console.log("values:",values)
      dispatch(doLogin(res))
      toast.success("successful account login");
      navigate("/list-tasks");
    }
  };

   return (
    <div id="val-login" className="validation-form">
      <div className="val val-title ">
        <span className="val-note">wellcom to My Web</span>
        Sign In
        <span className="val-note">access to experience all functions</span>
      </div>
      <Form
        className="val val-form "
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        layout="vertical"
      >
        <Form.Item
          className="val-item"
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              required: true,
              message: "Email is valid",
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]{2,}(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
          ]}
        >
          <Input
            className="val-input"
            onChange={(e) => setEmail(e.target.value)}
            // onKeyDown={(event) => handleKeyDown(event)}
          />
        </Form.Item>
        <Form.Item
          className="val-item"
          name={["user", "password"]}
          label="Password"
          rules={[
            {
              required: true,
              message:
                "The password must have 8-32 characters, at least 1 capital and 1 normal word !",
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/g,
            },
          ]}
          hasFeedback
        >
          <Input.Password
            className="val-input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          className="val-item"
          name={["user", "confirm"]}
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue(["user", "password"]) === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password className="val-input" />
        </Form.Item>
        <span>
          <NavLink to="/" className="nav-link">
            Go Home
          </NavLink>
        </span>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button className="val-submit" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;

