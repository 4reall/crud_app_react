import React from 'react';
import PropTypes from 'prop-types';

import gif404 from '../../assets/icons/browser-error.svg';
import styles from './page404.module.css';
import Container from '../../components/Container/Container';

const Page404 = (props) => {
	return (
		<Container>
			<img className={styles.img} src={gif404} alt="" />
			<div className={styles.message}>Page has not been found </div>
		</Container>
	);
};

Page404.propTypes = {};

export default Page404;
