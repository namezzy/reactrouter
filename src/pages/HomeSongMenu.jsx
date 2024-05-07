import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class HomeSongMenu extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      songMenus: [
        {
          id: "0001",
          name: "华语流行"
        },
        {
          id: "0002",
          name: "摇滚"
        },
        {
          id: "0003",
          name: "轻音乐"
        },
        {
          id: "0004",
          name: "R&B"
        },
        {
          id: "0005",
          name: "古典音乐"
        },
        {
          id: "0006",
          name: "电子音乐"
        },
        {
          id: "0007",
          name: "民谣"
        },
        {
          id: "0008",
          name: "说唱"
        },
        {
          id: "0009",
          name: "乡村音乐"
        },
        {
          id: "0010",
          name: "爵士音乐"
        }
      ]
    }
  }

  NavigateToDetail(id) {
    const { navigate } = this.props.router
    navigate("/detail/" + id)

  }
  render() {
    const { songMenus } = this.state
    return (
      <div>
        <h1>Home Song Menu</h1>
        <ul>
          {
            songMenus.map((item, index) => {
              return <li key={index} onClick={e => this.NavigateToDetail(item.id)}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(HomeSongMenu)