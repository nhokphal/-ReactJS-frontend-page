import React, { useState } from 'react';
import { Box, Skeleton } from "@mui/material"
import Post from "./Post";
import { Stack } from '@mui/system';


function Feed(props) {
    const [loading, setLoading] = useState(true);


    //handle loading
    setTimeout(() => {
        setLoading(
            false
        )
    }, [1000]);
    
    return ( 
            <Box flex={4} p={{ xs: 0, md: 2 }} >
            {/* first value set to be true(which is loading hook), else print second val */}
            {loading ? (
                <Stack spacing={1}   >
                  <Skeleton variant="text" height={100}/>
                  <Skeleton variant="text" height={20}  />
                  <Skeleton variant="text" height={20}  />
                  <Skeleton variant="rectangular" height={300} />
                </Stack>
            ) : (
                <>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                <Post/>
                </>
            )}
            </Box>
    );
}

export default Feed;