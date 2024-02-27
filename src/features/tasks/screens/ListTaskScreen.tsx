import { store, type RootState } from '../../../app/store'

import { useSelector } from "react-redux"

import { PlusOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
    Space,
    Table,
    Tag,
    Pagination,
    Input,
    Button,
    Select,
    Checkbox,
    TableColumnsType,
  } from "antd";
import instance from '../../../apis/apis';
import { TasksApis } from '../constants/constant.endpoint';
import storage from 'redux-persist/lib/storage';


interface ListType {
    key: React.Key
    title: string,
    category: string,
    status: string,
    created_at: string,
    completed_at:string,
    actions: string[],
  }

const ListTaskScreen = () => {
    const acc = useSelector((state: RootState)=>state.account_user.account)
    console.log("acc:",acc)
    const [listTasks, setListTasks] = useState<ListType[]>([
      {
        key: "1",
        title: "Title 01",
        category: "Category01",
        status: "done",
        created_at: " 16-6-2000",
        completed_at: " 16-6-2000",
        actions: ["delete", "update", "view"],
      },
    ]);

    useEffect(()=>{
        getTasks()
    },[])
    const getTasks= async ()=>{


      const response = await instance.get(`${TasksApis.TASKS_USER}=${acc.id}`, {});
      console.log("response:",response)
      const data=response.data
      setListTasks(data)
    }
    console.log("listTasks:",listTasks)

    const CheckboxGroup = Checkbox.Group;
    const doOptions = ["Done", "Doing", "Do Not"];

  
    const columns :  TableColumnsType<ListType> = [
      {
        title: (
          <div className="head-column">
            <label>Search Title</label>
            <Input
              className="head-column_input"
              placeholder="Search Title"

            />
          </div>
        ),
        dataIndex: "title",
        key: "title",
        render: (text, ob) => {
            console.log("text:",text)
            console.log("ob:",ob)
            return <label>{text}</label>;

        },
      },
      {
        title: (
          <div className="head-column">
            <label>Search Category</label>
            <Input
              className="head-column_input"
              placeholder="Search Title"

            />
          </div>
        ),
        dataIndex: "category",
        key: "category",
        render: (text, ob) => {
          return <label>{text}</label>

        },
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (text, ob) => {
 
          return ob.key === 1 ? (

            <CheckboxGroup
              className="check-box-group"
              options={doOptions}

            />
          ) : (
            <label>{text}</label>
          );
        },
      },
      {
        title: "Created At",
        dataIndex: "created",
        key: "created",
      },
      {
        title: "Completed At",
        dataIndex: "completed",
        key: "completed",
        render: (text, ob) => {
          console.log("comp_ob:",ob)
          return <label>{text}</label>;

        },
      },
      {
        title: (
          <div className="head-column">
            <label>Actions</label>
            <Button
              className="head-column_button"
              type="primary"
            //   onClick={() => handleAddTask()}
            >
              <PlusOutlined />
              <label>Add Task</label>
            </Button>
          </div>
        ),
        key: "actions",
        dataIndex: "actions",
        render: (id, ob) => {
          // return id == numUpdate ? (
          return id == 1 ? (

            <div className="actions">
              <Button type="primary" 
              // onClick={(e) => handleUpdateSubmit(e)}
              >
                Submit
              </Button>
              <Button
                type="primary"
                danger
                // onClick={(e) => handleCancelSubmit(e)}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <div className="actions">
              <Button
                type="primary"
                danger
                // onClick={(e) => handleDeleteTask(e, id)}
              >
                Delete
              </Button>
              <Button type="primary" 
              // onClick={(e) => handleUpdateTask(e, id)}
              >
                Update
              </Button>
            </div>
          );
        },
      },
    ];

    return (
      <div id="tasks">
            <h1>List Task Screen</h1>

        <Table
          className="table-tasks"
          columns={columns}
          dataSource={listTasks}
          pagination={{
            position: ["bottomCenter"],
            defaultCurrent: 1,
            defaultPageSize: 6,
            showSizeChanger: false,
            // pageSizeOptions: ["5", "10", "20", "30"],
          }}
        />
      </div>
    );
  };
export default ListTaskScreen