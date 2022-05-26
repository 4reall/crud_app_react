import React from 'react';
import PropTypes from 'prop-types';

const withConditionalRendering = ([Error, Loading, Component]) => {
	return ({ errorMessage, isLoading, ...props }) => {
		const error = errorMessage ? (
			<Error errorMessage={errorMessage} />
		) : null;
		const spinner = isLoading ? <Loading /> : null;
		const view =
			!isLoading && !errorMessage ? <Component {...props} /> : null;
		return (
			<>
				{error}
				{spinner}
				{view}
			</>
		);
	};
};

withConditionalRendering.propTypes = {
	Error: PropTypes.node.isRequired,
	Loading: PropTypes.node.isRequired,
	Component: PropTypes.node.isRequired,
};

export default withConditionalRendering;
