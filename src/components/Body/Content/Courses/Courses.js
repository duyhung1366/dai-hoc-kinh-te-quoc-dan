import "./Courses.module.css";

import React from "react";
import ListCourse from "./ListCourse/ListCourse";

const Courses = () => {
  return (
    <div>
      <ListCourse
        title="Môn đại cương (64 Khóa )"
        api="http://localhost:3000/listCourses"
      />
      <ListCourse
        title="Môn chuyên ngành (76 Khóa )"
        api="http://localhost:3000/listCourses"
      />
      <ListCourse
        title="Môn học AEP (33 Khóa )"
        api="http://localhost:3000/listCourses"
      />
      <ListCourse
        title="Ngoại ngữ - tin học - CĐR (3 Khóa )"
        api="http://localhost:3000/listCourses"
      />
    </div>
  );
};

export default Courses;
