import React from 'react';
import {reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm.js';
import SurveyFormReview from './SurveyFormReview.js';

class SurveyNew extends React.Component {
	state = { showFormReview: false }; // create-react-app snippet

	renderContent() {
		if (this.state.showFormReview) {
			return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />;
		}
		return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: 'surveyForm'
	//destroyOnUnmount: true by default when the user leave SurveyNew dump the values
})(SurveyNew);