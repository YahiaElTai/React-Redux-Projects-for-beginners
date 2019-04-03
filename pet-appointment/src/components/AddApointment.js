/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

class AddApointment extends React.Component {
  onFormSubmit = event => {
    const { handleForm } = this.props;
    const { petName, ownerName, date, time, aptNotes } = this.state;
    const tempItem = {
      petName,
      ownerName,
      aptNotes,
      aptDate: `${date} ${time}`,
    };
    event.preventDefault();
    handleForm(tempItem);
  };

  handleClick = () => {
    document.querySelector('.form-element').classList.toggle('hide');
  };

  onInputChange = event => {
    const {
      target: { id, value },
    } = event;
    this.setState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  render() {
    return (
      <div>
        <div
          className="panel-heading apt-addheading"
          onClick={this.handleClick}
        >
          <span className="glyphicon glyphicon-plus" /> Add Appointment
        </div>
        <form onSubmit={this.onFormSubmit} className="form-element">
          <div className="form-group row">
            <label htmlFor="petName" className="col-xs-8 col-form-label">
              Pet Name
              <div className="col-xs-6">
                <input
                  onChange={this.onInputChange}
                  id="petName"
                  className="form-control"
                  type="text"
                  placeholder="Pet's Name"
                />
              </div>
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="ownerName" className="col-xs-8 col-form-label">
              Pet Owner
              <div className="col-xs-6">
                <input
                  id="ownerName"
                  onChange={this.onInputChange}
                  className="form-control"
                  type="text"
                  placeholder="Pet's Owner"
                />
              </div>
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="date" className="col-xs-8 col-form-label">
              Date
              <div className="col-xs-6">
                <input
                  id="date"
                  onChange={this.onInputChange}
                  className="form-control"
                  type="date"
                />
              </div>
            </label>
            <label htmlFor="time" className="col-xs-8 col-form-label">
              Time
              <div className="col-xs-6">
                <input
                  id="time"
                  onChange={this.onInputChange}
                  className="form-control"
                  type="time"
                />
              </div>
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="aptNotes" className="col-xs-10 col-form-label">
              Apt. Notes
              <div className="col-xs-8">
                <textarea
                  id="aptNotes"
                  onChange={this.onInputChange}
                  className="form-control"
                  type="text"
                  placeholder="Appointment Notes"
                />
              </div>
            </label>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Add Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

AddApointment.propTypes = {
  handleForm: PropTypes.func.isRequired,
};

export default AddApointment;
