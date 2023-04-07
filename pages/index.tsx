import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
	const [name, setName] = useState('');
	const [wuName, setWuName] = useState('');

	async function handleRequest() {
		const { data } = await axios.get(`/api/name?name=${name}`);

		setWuName(data.name);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Wu-Tang Clan Name Generator</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<div className='form'>
					{wuName && (
						<p>
							{name}! You will now be known as
							<br />
							<span className='wu-name'>{wuName}</span>
						</p>
					)}
					<input
						placeholder='Your name'
						onChange={(e) => {
              setName(e.target.value)
              setWuName("")
            }}
					/>
					<button onClick={() => handleRequest()}>Generate name</button>
				</div>
			</main>
		</div>
	);
}
