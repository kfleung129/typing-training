import { Box } from '@mui/material';

const styles = {
    display: 'flex',
    flexDirection: 'column',
    margin: '40px',
};

function CommonLayout(props) {
    return <Box sx={styles}>{props.children}</Box>;
}

export default CommonLayout;
