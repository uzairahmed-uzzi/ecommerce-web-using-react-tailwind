import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Stack,Avatar ,Box} from '@mui/material';
import Badge from '@mui/material/Badge';
const ActionButton = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className='w-2/6 h-full '>
       <Stack
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        direction="row"
        justifyContent="between"
        alignContent={"center"}
        alignItems={"center"}
        spacing={1}
      >
        <div className="w-3/12 rounded-full bg-green-700 h-5/6 text-center">
            4
        </div>
        <div className="w-7/12 h-4/6 text-search-input-col">
            My Cart
        </div>
      </Stack>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
    </div>
  )
}

export default ActionButton