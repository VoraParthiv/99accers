import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function ProAddress({ handleNextCard, subPropertyType,getPropertyDetails }) {


  return (
    <>
      {
        (subPropertyType == "banquet halls" || subPropertyType == "plot" || subPropertyType == "shop" || subPropertyType == "retail" || subPropertyType == "office") &&
        <div className="col-lg-4 col-md-6 col-sm-12" id='address_info' style={{ display: "none" }}>
          <div className="card-body">
            <h3>Property Address</h3>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div className=" m-0 mt-3" style={{ width: "fit-content" }}>
                <select name='state' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select State</option>
                  <option value="yes">Living</option>
                  <option value="no">Died</option>
                </select>
                <select name='district' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select District</option>
                  <option value="1">Indian</option>
                  <option value="2">NRI</option>
                </select>
                <select name='city' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select City</option>
                  <option value="1">Indian</option>
                  <option value="2">NRI</option>
                </select>
              </div>
              <TextField name='landmark' onChange={getPropertyDetails} id="outlined-basic" label="Landmark" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='area' onChange={getPropertyDetails} id="outlined-basic" label="Area" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='sector' onChange={getPropertyDetails} id="outlined-basic" label="Sector" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='flatNo' onChange={getPropertyDetails} id="outlined-basic" label="Flat No." variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='location' onChange={getPropertyDetails} id="outlined-basic" label="Location" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='remarks' onChange={getPropertyDetails} id="outlined-basic" label="Remarks" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
            </Box>
            <div className="submit-btn mt-5">
              <Stack direction="row" spacing={2}>
                <Button fullWidth variant="contained"
                  endIcon={<SendIcon />} style={{ padding: "15px 0", fontSize: "16px", fontWeight: "600" }} onClick={handleNextCard}>
                  Start Now
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ProAddress
