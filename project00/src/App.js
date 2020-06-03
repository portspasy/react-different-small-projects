import React from "react";
import "./App.css";
import faker from "faker";

// ReactJS Components
import CommentDetail from "./components/comment-detail/comment-detail";
import ApprovalCard from "./components/approval-card/approval-card";

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <CommentDetail
        avatar={faker.image.avatar()}
        firstName={faker.name.firstName()}
        lastName={faker.name.lastName()}
        desc={faker.lorem.sentence()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        firstName={faker.name.firstName()}
        lastName={faker.name.lastName()}
        desc={faker.lorem.sentence()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        firstName={faker.name.firstName()}
        lastName={faker.name.lastName()}
        desc={faker.lorem.sentence()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        firstName={faker.name.firstName()}
        lastName={faker.name.lastName()}
        desc={faker.lorem.sentence()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        firstName={faker.name.firstName()}
        lastName={faker.name.lastName()}
        desc={faker.lorem.sentence()}
      />
      <ApprovalCard
        avatar={faker.image.avatar()}
        firstName={faker.name.firstName()}
        lastName={faker.name.lastName()}
        desc={faker.lorem.sentence()}
      />
    </div>
  );
};

export default App;
