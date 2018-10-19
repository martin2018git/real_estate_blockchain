import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

class Projects extends Component {

/*  state = {
    projects: [
      {
        name: "Enmergency Food Dispatch",
        addr: "0x0852622b974cbd63a95523c5ea047e6a22a1098",
        balance: "0.000000000"
      },
      {
        name: "One Laptop per Child",
        addr: "0xab7e42b82d810c1ffde3d5955e86191b05ce1fe1",
        balance: "0.000000000"
      },

    ]
  }
*/
  render() {
    return (
      <div id='Projects' className='tile'>
        <div className='tile-header'>Smart Contracts</div>

        {this.props.recordSet
          .map((project, index) =>
            <Project
                  key={index}
                  name={project.name}
                  addr={project.addr}
                  balance={project.balance}
                  updateBalance={ ()=>this.props.updateBalance("project",index) }
                  actionSet={ [
                          {key:1, name:"Bidding"},
                          {key:2, name:"Close"},
                          {key:3, name:"Renting"},
                          {key:4, name:"Sale"},
                          {key:5, name:"Settle"}
                          ]}
                  handleClick={this.props.handleClick}
            />
          )}

          <div className='tile-record-add'>
            <button className='btn-add-disabled'>Add Investment Property</button>
          </div>
      </div>
    );
  }
}

Projects.propTypes = {
  recordSet: PropTypes.array.isRequired,
  updateBalance: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Projects;
