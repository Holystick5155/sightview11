import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ChevronLeft, ChevronRight, ExitToApp, InboxOutlined, Settings, MailOutlined, MenuOutlined, KeyboardArrowDown, HomeOutlined, SchoolOutlined, LaptopOutlined, PublicOutlined, SportsSoccerOutlined, MusicNoteOutlined, EmojiPeopleOutlined, AccountCircleOutlined, CreateOutlined, ExploreOutlined, DescriptionOutlined } from "@material-ui/icons";
import {
  Box,
  Hidden,
  IconButton,
  InputBase,
  CircularProgress,
  MenuItem,
  Tooltip,
  Avatar,
  Menu,
  Divider,
  ListItemIcon,
  Drawer,
  styled,
  useTheme,
  List,
  ListItem,
  ListItemText,
  CssBaseline
} from "@material-ui/core";

import { NavbarStyle } from "./navbarStyle";
//import image from "../../images/logo192.png";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/AuthActions";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const drawerWidth = 240;

export default function Navbar({ searchPostData, handleSearchOnChange }) {
  const theme = useTheme();
  const [openNav, setOpenNav] = useState(false);

  const handleDrawerOpen = () => {
    setOpenNav(true);
  }

  const handleDrawerClose = () => {
    setOpenNav(false);
  }
  const user = useSelector((state) => state.authReducer.authData);

  const classes = NavbarStyle();
  const [isOnChange, setIsOnChange] = useState(false);
  const [targetValue, setTargetValue] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    setIsOnChange(false);
  }, [searchPostData]);

  const handleLogOut = () => {
    dispatch(logout());
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElMore, setAnchorElMore] = useState(null);
  const openMore = Boolean(anchorElMore);
  const handleClickMore = (e) => {
    setAnchorElMore(e.currentTarget);

  };
  const handleCloseMore = () => {
    setAnchorElMore(null);
  };

  return (
    <AppBar position='fixed'>
      <CssBaseline />
      <div>
        <Link to='/' className={classes.link}>
          <Box className={classes.logoContainer}>
            {/* <img src={image} alt='react blog'className={classes.logo} /> */}
            <Typography variant='h6' className={classes.title} noWrap>
              iSight Africa
            </Typography>
          </Box>
        </Link>
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexshrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={openNav}
      >
        <DrawerHeader>
          <h3>iSight Africa</h3>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to='/' className={classes.link} onClick={handleDrawerClose}>
            <ListItem>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>

          <ListItem>
            <ListItemIcon>
              <EmojiPeopleOutlined />
            </ListItemIcon>
            <ListItemText primary="World News" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <EmojiPeopleOutlined />
            </ListItemIcon>
            <ListItemText primary="National News (Ghana)" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <EmojiPeopleOutlined />
            </ListItemIcon>
            <ListItemText primary="Business" />
          </ListItem>


          <ListItem>
            <ListItemIcon>
              <EmojiPeopleOutlined />
            </ListItemIcon>
            <ListItemText primary="Culture" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PublicOutlined />
            </ListItemIcon>
            <ListItemText primary="Politics" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LaptopOutlined />
            </ListItemIcon>
            <ListItemText primary="Science/Tech" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SportsSoccerOutlined />
            </ListItemIcon>
            <ListItemText primary="Sports" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <MusicNoteOutlined />
            </ListItemIcon>
            <ListItemText primary="Entertainment" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SchoolOutlined />
            </ListItemIcon>
            <ListItemText primary="Education" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmojiPeopleOutlined />
            </ListItemIcon>
            <ListItemText primary="Health" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmojiPeopleOutlined />
            </ListItemIcon>
            <ListItemText primary="Lifestyle" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmojiPeopleOutlined />
            </ListItemIcon>
            <ListItemText primary="Weather" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <EmojiPeopleOutlined />
            </ListItemIcon>
            <ListItemText primary="Travel" />
          </ListItem>

        </List>

        <Divider />

        <List>
          <ListItem>
            <ListItemIcon>
              <DescriptionOutlined />
            </ListItemIcon>
            <ListItemText primary="Articles/Opinions" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CreateOutlined />
            </ListItemIcon>
            <ListItemText primary="Writings" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText primary="Profiles" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ExploreOutlined />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
        </List>
        {/* <List>
          {['Inbox', 'Starred', 'Send Email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutlined />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Toolbar open={openNav}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}>
          <MenuOutlined />
        </IconButton>
        <DrawerHeader />
        <Link to='/home' className={classes.navLink}>
          <Hidden xsDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              Home
            </Typography>
          </Hidden>
        </Link>
        <Link to='/culture' className={classes.navLink}>
          <Hidden xsDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              World
            </Typography>
          </Hidden>
        </Link>
        <Link to='/politics' className={classes.navLink}>
          <Hidden xsDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              National (Ghana)
            </Typography>
          </Hidden>
        </Link>
        <Link to='/computers' className={classes.navLink}>
          <Hidden smDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              Sci/Tech
            </Typography>
          </Hidden>
        </Link>
        <Link to='/sports' className={classes.navLink}>
          <Hidden mdDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              Sports
            </Typography>
          </Hidden>
        </Link>
        <Link to='/music' className={classes.navLink}>
          <Hidden mdDown>
            <Typography variant='h6' className={classes.navItems} noWrap>
              Entertainment
            </Typography>
          </Hidden>
        </Link>

        <Hidden xsDown>

          <Button
            id="basic-button"
            aria-controls={openMore ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMore ? 'true' : undefined}
            onClick={handleClickMore}
            endIcon={<KeyboardArrowDown />}
            style={{
              color: "white",
              textTransform: 'capitalize',
              fontSize: "18px"
            }}
          >
            More
          </Button>


          <Menu
            id="basic-menu"
            anchorEl={anchorElMore}
            open={openMore}
            onClose={handleCloseMore}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            style={{
              marginTop: "50px"
            }}
          >
            <Hidden mdUp>
              <MenuItem onClick={handleCloseMore}>Computers</MenuItem>
            </Hidden>
            <Hidden lgUp>
              <MenuItem onClick={handleCloseMore}>Sports</MenuItem>
              <MenuItem onClick={handleCloseMore}>Entertainment</MenuItem>
            </Hidden>
            <MenuItem onClick={handleCloseMore}>Education</MenuItem>
            <MenuItem onClick={handleCloseMore}>Business</MenuItem>
            <MenuItem onClick={handleCloseMore}>Religion</MenuItem>
            <MenuItem onClick={handleCloseMore}>Science/Tech</MenuItem>
            <MenuItem onClick={handleCloseMore}>Lifestyle</MenuItem>
            <MenuItem onClick={handleCloseMore}>Travel</MenuItem>
            <MenuItem onClick={handleCloseMore}>Weather</MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseMore}>Articles/Opinions</MenuItem>
            <MenuItem onClick={handleCloseMore}>Writings</MenuItem>
            <MenuItem onClick={handleCloseMore}>Stories & Novels</MenuItem>
            <MenuItem onClick={handleCloseMore}>Profiles</MenuItem>
            <MenuItem onClick={handleCloseMore}>Blogs</MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseMore}>Videos</MenuItem>
            <MenuItem onClick={handleCloseMore}>Gallery</MenuItem>
            <MenuItem onClick={handleCloseMore}>Explore Africa</MenuItem>
          </Menu>
        </Hidden>

        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            {!isOnChange ? (
              <SearchIcon />
            ) : (
              <CircularProgress
                style={{
                  width: "20px",
                  height: "20px",
                  color: "white",
                }}
              />
            )}
          </div>


          <InputBase
            placeholder='search ...'
            inputProps={{ "aria-details": "search" }}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={({ target }) => {
              handleSearchOnChange(target);
              setIsOnChange(true);
              setTargetValue(target.value);
            }}
          />
          {targetValue.length > 0 ? (
            <Box className={classes.infoMsg}>
              {searchPostData.length === 0 ? (
                <Typography variant='body2' align='center' color='error'>
                  No Record Found !!
                </Typography>
              ) : (
                <Typography variant='body2' align='center' color='inherit'>
                  Found {searchPostData.length} Found ...
                </Typography>
              )}
            </Box>
          ) : null}
        </div>

        {user && user.user.isAdmin === true ? (
          <>
            <Hidden smDown>
              <Button
                component={Link}
                to='/addpost'
                variant='contained'
                color='secondary'
                startIcon={<PostAddIcon />}
                className={classes.button}>
                Add Post
              </Button>
            </Hidden>
            <Hidden mdUp>
              <IconButton component={Link} to='/addpost' color='inherit'>
                <PostAddIcon />
              </IconButton>
            </Hidden>
          </>
        ) : " "}

        {!user && (
          <Link to='/auth' className={classes.navLink}>
            <Typography variant='h6' className={classes.navItems} noWrap>
              Login
            </Typography>

          </Link>
        )}


        {user && (
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} style={{ marginLeft: "5px" }}>
            <Hidden mdDown>
              <Typography variant='h6' className={classes.navItems} noWrap>{user.user.username}</Typography>
            </Hidden>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <Avatar sx={{ width: 32, height: 32 }}>{user.user.username.charAt(0).toUpperCase()}</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        )}

        {user ? <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          style={{ marginTop: "65px" }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 100,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar style={{ marginRight: 10 }} />
            {user.user.firstname + ' ' + user.user.lastname}
          </MenuItem>
          <MenuItem>
            <Avatar style={{ marginRight: 10 }} /> My Account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontsize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogOut}>
            <ListItemIcon>
              <ExitToApp fontsize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>

        </Menu> : null}

      </Toolbar>
    </AppBar >
  );
}
