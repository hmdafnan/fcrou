import React from 'react';
import {Button} from 'reactstrap';

function RenderNotifications({item}) {
    return(
        <div className='notification-card'>
            <h3>{item.name}</h3>
            <div>{item.phno}</div>
            <div>{item.email}</div>
            <div className='notification-message'>{item.message}</div>
            <Button color='danger'>delete</Button>&nbsp;
            <Button>a</Button>
        </div>
    )
}

function returnNotifications(notification) {
    let renderedCardArr = [];
    if (!notification) return;
    for (let i = 0; i < notification.length; i++) {
    const element = notification[i];
    renderedCardArr.push( <RenderNotifications key={element.id} item={element} /> )
  }
  return renderedCardArr;
}

function Dashboard(props) {
    return(
        <div className='container-fluid bgc'>
            <Button>Manage Reviews</Button>
            {returnNotifications(props.notification)}
        </div>
    )
}

export default Dashboard;