import Head from 'next/head';
// import Project from '@/components/Projects';
import ReadyToTalk from '@/components/ReadyToTalk';
import Layout from '@/components/Layout';
export default function Home() {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
					integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
				/>
				<link rel="stylesheet" href="./index.css" />
			</Head>

			<Layout pageName="PROJECTS">
				{/* <Project /> */}
				<ReadyToTalk />
			</Layout>
		</>
	);
}