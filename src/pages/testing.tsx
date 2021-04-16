import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography, Grid } from '@material-ui/core';
import Navbar from '@/components/Navbar';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		resultBox: {
			boxShadow: theme.shadows[1],
			borderRadius: theme.shape.borderRadius,
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(0.5),
			width: theme.spacing(40),
			maxHeight: theme.spacing(17),
			'&:hover': {
				backgroundColor: theme.palette.action.selected,
			},
			'&:focus': {
				backgroundColor: theme.palette.action.selected,
			},
		},
		heading: {
			...theme.typography.h5,
			color: theme.palette.text.primary,
			paddingLeft: theme.spacing(0.75),
			fontWeight: 'bolder',
		},
		text: {
			...theme.typography.subtitle2,
			color: theme.palette.text.secondary,
			paddingLeft: theme.spacing(1),
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			maxHeight: theme.spacing(11),
		},
	})
);

export default function Variants() {
	const classes = useStyles();

	return (
		<Container style={{ margin: '1rem' }}>
			<Navbar />
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="flex-start"
				spacing={1}>
				<Grid item>
					<Box className={classes.resultBox}>
						<Typography className={classes.heading}>this is the name</Typography>
						<div className={classes.text}>
							uam autem dolorum omnis accusantium. Nulla temporibus sint aut nihil
							mollitia laboriosam ut. Illo praesentium non qui. uam autem dolorum
							omnis accusant
						</div>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
