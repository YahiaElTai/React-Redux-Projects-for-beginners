import React from 'react';
import orderBy from 'lodash.orderby';
import AddApointment from './AddApointment';
import ListApointment from './ListApointment';
import Search from './search';

const dummyData = [
  {
    petName: 'Spot',
    ownerName: 'Constance Smith',
    aptDate: '2016-06-24 08:30',
    aptNotes: 'This German Shepherd is having some back pain',
  },
  {
    petName: 'Goldie',
    ownerName: 'Barot Bellingham',
    aptDate: '2016-06-22 15:50',
    aptNotes: 'This Goldfish has some weird spots in the belly',
  },
  {
    petName: 'Buffy',
    ownerName: 'Hassum Harrod',
    aptDate: '2016-06-20 15:30',
    aptNotes: 'This Chihuahua has not eaten for three days and is lethargic',
  },
  {
    petName: 'Mitten',
    ownerName: 'Hillary Goldwyn',
    aptDate: '2016-06-21 9:15',
    aptNotes: 'Cat has excessive hairballs',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
      queryText: '',
    };
  }

  onDelete = event => {
    const {
      target: { id },
    } = event;
    this.setState(prevState => {
      prevState.data.splice(id, 1);
      return { data: prevState.data };
    });
  };

  onSearchQuery = e => {
    this.setState({ queryText: e.target.value });
  };

  handleSortBy = id => {
    this.setState(prevState => ({
      data: orderBy(prevState.data, [id], ['asc']),
    }));
  };

  handleFormSubmit = tempItem => {
    this.setState(prevState => {
      prevState.data.unshift(tempItem);
      return { data: prevState.data };
    });
  };

  filterData = queryText => {
    const { data } = this.state;
    const newArray = data.filter(() => true);
    return newArray.filter(
      item =>
        item.petName.toLowerCase().indexOf(queryText) !== -1 ||
        item.ownerName.toLowerCase().indexOf(queryText) !== -1 ||
        item.aptDate.toLowerCase().indexOf(queryText) !== -1 ||
        item.aptNotes.toLowerCase().indexOf(queryText) !== -1,
    );
  };

  render() {
    const { queryText } = this.state;
    return (
      <div>
        <AddApointment handleForm={this.handleFormSubmit} />
        <Search
          onHandleSearch={this.onSearchQuery}
          onHandleSort={this.handleSortBy}
        />
        <br />
        <ListApointment
          handleDelete={this.onDelete}
          data={this.filterData(queryText)}
        />
      </div>
    );
  }
}

export default App;
