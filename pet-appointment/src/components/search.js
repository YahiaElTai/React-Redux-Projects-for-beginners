import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  handleSort = e => {
    const { onHandleSort } = this.props;
    onHandleSort(e.target.id);
  };

  handleSearch = e => {
    const { onHandleSearch } = this.props;
    onHandleSearch(e);
  };

  render() {
    return (
      <div className="row search-appointments">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="input-group">
            <input
              id="SearchApts"
              onChange={this.handleSearch}
              placeholder="Search"
              type="text"
              className="form-control"
              aria-label="Search Appointments"
            />
            <div className="input-group-btn">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by <span className="caret" />
              </button>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <button type="button" onClick={this.handleSort} id="petName">
                    Pet Name
                  </button>
                </li>
                <li>
                  <button type="button" onClick={this.handleSort} id="aptDate">
                    Date
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={this.handleSort}
                    id="ownerName"
                  >
                    Owner
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onHandleSort: PropTypes.func.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
};

export default Search;
