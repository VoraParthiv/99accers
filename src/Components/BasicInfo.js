import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function BasicInfo({ handleNextCard, subPropertyType, getPropertyDetails,getPropertyDetails1 }) {
    return (
        <>
            {/*------------------------------------- Commercial ------------------------------------- */}
            {
                (subPropertyType == 'banquet halls' || subPropertyType == 'plot') &&
                <div className="col-lg-4 col-md-6 col-sm-12" id='basic_info' style={{ display: "none" }}>
                    <div className="card-body">
                        <h3 className='mb-4'>Property Basic Information</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            encType='multipart/form-data'
                        >
                            <TextField name='p_ownerShipSinces' onChange={getPropertyDetails} id="outlined-basic" label="Owenership Since" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
                            <TextField name='p_availableDate' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Availability Date" variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField name='p_attechment' onChange={getPropertyDetails1} className='mt-2' id="outlined-basic" type='file' variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField name='p_treeCount' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Tree Count" variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField name='p_purchasedFrom' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Purchased From" variant="outlined" style={{ width: "100%", margin: 0 }} />
                        </Box>
                        <div className="submit-btn mt-5" onClick={handleNextCard}>
                            <i className="fa-solid fa-forward"></i>
                        </div>
                    </div>
                </div>
            }

            {
                (subPropertyType == 'shop' || subPropertyType == 'retail' || subPropertyType == 'office') &&
                <div className="col-lg-4 col-md-6 col-sm-12" id='basic_info' style={{ display: "none" }}>
                    <div className="card-body">
                        <h3 className='mb-4'>Property Basic Information</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" name='p_ownerShipSinces' onChange={getPropertyDetails} label="Owenership Since" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
                            <TextField className='mt-2' id="outlined-basic" name='p_availableDate' onChange={getPropertyDetails} label="Availability Date" variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField className='mt-2' id="outlined-basic" type='file' name='p_attechment' onChange={getPropertyDetails} variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField className='mt-2' id="outlined-basic" name='p_purchasedFrom' onChange={getPropertyDetails} label="Purchased From" variant="outlined" style={{ width: "100%", margin: 0 }} />
                        </Box>
                        <div className="submit-btn mt-5" onClick={handleNextCard}>
                            <i className="fa-solid fa-forward"></i>
                        </div>
                    </div>
                </div>
            }

            {
                (subPropertyType == 'hotel' || subPropertyType == 'factory') &&
                <div className="col-lg-4 col-md-6 col-sm-12" id='basic_info' style={{ display: "none" }}>
                    <div className="card-body">
                        <h3 className='mb-4'>Property Basic Information</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField name='p_ownerShipSinces' onChange={getPropertyDetails} id="outlined-basic" label="Owenership Since" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
                            <TextField name='p_treeCount' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Tree Count" variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField name='p_purchasedFrom' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Purchased From" variant="outlined" style={{ width: "100%", margin: 0 }} />
                        </Box>
                        <Stack direction="row" spacing={2} marginTop={4}>
                            <Button fullWidth variant="contained"
                                endIcon={<SendIcon />} style={{ padding: "15px 0", fontSize: "16px", fontWeight: "600" }} onClick={handleNextCard}>
                                Submit
                            </Button>
                        </Stack>
                    </div>
                </div>
            }

            {/*------------------------------------- Residentail ------------------------------------- */}
            {
                (subPropertyType == 'flat/apartment') &&
                <div className="col-lg-4 col-md-6 col-sm-12" id='basic_info' style={{ display: "none" }}>
                    <div className="card-body">
                        <h3 className='mb-4'>Property Basic Information</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField name='p_ownerShipSinces' id="outlined-basic" label="Owenership Since" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} onChange={getPropertyDetails} />
                            <TextField name='p_availableDate' className='mt-2' id="outlined-basic" label="Availability Date" variant="outlined" style={{ width: "100%", margin: 0 }} onChange={getPropertyDetails} />
                            <TextField name='p_attechment' className='mt-2' id="outlined-basic" type='file' variant="outlined" style={{ width: "100%", margin: 0 }} onChange={getPropertyDetails} />
                            <TextField name='p_purchasedFrom' className='mt-2' id="outlined-basic" label="Purchased From" variant="outlined" style={{ width: "100%", margin: 0 }} onChange={getPropertyDetails} />
                        </Box>
                        <button className="submit-btn mt-5" onClick={handleNextCard}>
                            <i className="fa-solid fa-forward"></i>
                        </button>
                    </div>
                </div>
            }

            {
                (subPropertyType == 'independent floor' || subPropertyType == 'villa' || subPropertyType == 'farmhouse') &&
                <div className="col-lg-4 col-md-6 col-sm-12" id='basic_info' style={{ display: "none" }}>
                    <div className="card-body">
                        <h3 className='mb-4'>Property Basic Information</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            encType='multipart/form-data'
                        >
                            <TextField name='p_ownerShipSinces' onChange={getPropertyDetails} id="outlined-basic" label="Owenership Since" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
                            <TextField name='p_availableDate' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Availability Date" variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField name='p_attechment' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" type='file' variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField name='p_treeCount' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Tree Count" variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField name='p_purchasedFrom' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Purchased From" variant="outlined" style={{ width: "100%", margin: 0 }} />
                        </Box>
                        <div className="submit-btn mt-5" onClick={handleNextCard}>
                            <i className="fa-solid fa-forward"></i>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default BasicInfo
