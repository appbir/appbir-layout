/****************************************
 *   常见的两列布局
 ****************************************
 */


import React, { Component } from "react";
import Layout, { POSITION } from "@layout";
import "./index.less"
import Left from "./part/left.jsx";
import Right from "./part/right.jsx";
import Content from "./part/content.jsx";
import Top from "./part/content.jsx";
import Bottom from "./part/content.jsx";
import Header from "./part/header.jsx";
import ContentHeader from "./part/content_header.jsx";

let defaultConfig = {
  model: "FULL", // DIY 模型支持自定义宽度和高度 FULL 表示全浏览器满屏  默认FULL
  style: null, // DIY模式下自定义样式内容
  config: {
    header: {
      visible: true,
      width: "",
      height: "50px",
      fixed: false,
      zIndex: 10,
    },
    left: {
      visible: true,
      width: "134px",
      height: "",
      fixed: false,
      zIndex: 10,
    },
    right: {
      visible: true,
      width: "87px",
      height: "",
      fixed: false,
      zIndex: 10,
    },
    content_header: {
      visible: true,
      width: "",
      height: "36px",
      fixed: false,
      zIndex: 10,
    },
    content: {
      visible: true,
      width: "",
      height: "",
      fixed: false,
      zIndex: 10,
    },
    bottom: {
      visible: true,
      width: "",
      height: "50px",
      fixed: false,
      zIndex: 10,
    },
  },

}

class LayoutBoilerplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        left: { width: '50%', className: "appbir" }, // 支持自定义属性
      }
    };
  }
  render() {
    return (
      <div className="inner" style={{ width: "600px", height: "400px", background: "blue" }}>
        <Layout config={this.state.config} >
          <Left targetName="left" />
          <Content targetName="content" />
        </Layout>
      </div>
    );
  }
}

export default LayoutBoilerplate;

