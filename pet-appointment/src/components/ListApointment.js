import React from 'react';
import PropTypes from 'prop-types';

class ListApointment extends React.Component {
  onHandleDelete = event => {
    const { handleDelete } = this.props;
    handleDelete(event);
  };

  renderList() {
    const { data } = this.props;
    return data.map((item, id) => {
      return (
        <li className="pet-item media" key={item.petName}>
          <div className="media-left">
            <button
              type="button"
              className="btn btn-xs btn-danger pet-delete"
              onClick={this.onHandleDelete}
            >
              <span id={id} className="glyphicon glyphicon-remove" />
            </button>
          </div>
          <div className="pet-info media-body">
            <div className="pet-head">
              <span className="pet-name">{item.petName}</span>
              <span className="apt-date pull-right">{item.aptDate}</span>
            </div>
            <div className="owner-name">
              <strong>Owner: </strong>
              {item.ownerName}
            </div>
            <div className="apt-notes">{item.aptNotes}</div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="interface">
        <ul className="item-list media-list">{this.renderList()}</ul>
      </div>
    );
  }
}

ListApointment.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ListApointment;
