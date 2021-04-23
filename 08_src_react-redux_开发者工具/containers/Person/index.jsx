import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/person';

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value*1
    const personObj = { id: nanoid(), name, age }
    this.props.jiayiren(personObj)
  }

  render() {
    return (
      <div>
        <h2>我是Person组件,上方组件的求和为：{this.props.count}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.yiduiren.map((p) => {
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ yiduiren: state.rens, count: state.he }),
  {
    jiayiren: createAddPersonAction
  }
)(Person)
