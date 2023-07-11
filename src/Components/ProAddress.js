import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function ProAddress({ handleNextCard, subPropertyType, getPropertyDetails, formSubmit }) {


  return (
    <>
      {/* Commercial */}
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
                <select name='p_state' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select State</option>
                  <option value="yes">Living</option>
                  <option value="no">Died</option>
                </select>
                <select name='p_district' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select District</option>
                  <option value="1">Indian</option>
                  <option value="2">NRI</option>
                </select>
                <select name='p_city' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select City</option>
                  <option value="1">Indian</option>
                  <option value="2">NRI</option>
                </select>
              </div>
              <TextField name='p_landMark' onChange={getPropertyDetails} id="outlined-basic" label="Landmark" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_area' onChange={getPropertyDetails} id="outlined-basic" label="Area" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_sector' onChange={getPropertyDetails} id="outlined-basic" label="Sector" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_flatNo' onChange={getPropertyDetails} id="outlined-basic" label="Flat No." variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_latitude' onChange={getPropertyDetails} id="outlined-basic" label="Location" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_longitude' onChange={getPropertyDetails} id="outlined-basic" label="Location" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_reMarkes' onChange={getPropertyDetails} id="outlined-basic" label="Remarks" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
            </Box>
            <div className="submit-btn mt-5">
              <Stack direction="row" spacing={2}>
                <Button fullWidth variant="contained"
                  endIcon={<SendIcon />} style={{ padding: "15px 0", fontSize: "16px", fontWeight: "600" }} onClick={formSubmit} type='submit'>
                  Submit
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      }

      {/* Residentail */}
      {
        (subPropertyType == "flat/apartment" || subPropertyType == 'independent floor' || subPropertyType == 'villa' || subPropertyType == 'farmhouse' || subPropertyType == 'plot') &&
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
              <div className="m-0 mt-3" style={{ width: "fit-content" }}>
                <select name='p_state' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select State</option>
                  <option value="yes">Living</option>
                  <option value="no">Died</option>
                </select>
                <select name='p_district' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select District</option>
                  <option value="1">Indian</option>
                  <option value="2">NRI</option>
                </select>
                <select name='p_city' onChange={getPropertyDetails} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option disabled selected>Select City</option>
                  <option value="1">Indian</option>
                  <option value="2">NRI</option>
                </select>
              </div>
              <TextField name='p_landMark' onChange={getPropertyDetails} id="outlined-basic" label="Landmark" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_area' onChange={getPropertyDetails} id="outlined-basic" label="Area" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_sector' onChange={getPropertyDetails} id="outlined-basic" label="Sector" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_flatNo' onChange={getPropertyDetails} id="outlined-basic" label="Flat No." variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_latitude' onChange={getPropertyDetails} id="outlined-basic" label="Location" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_longitude' onChange={getPropertyDetails} id="outlined-basic" label="Location" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
              <TextField name='p_reMarkes' onChange={getPropertyDetails} id="outlined-basic" label="Remarks" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
            </Box>
            <div className="submit-btn mt-5">
              <Stack direction="row" spacing={2}>
                <Button fullWidth variant="contained"
                  endIcon={<SendIcon />} style={{ padding: "15px 0", fontSize: "16px", fontWeight: "600" }} onClick={formSubmit} type='submit'>
                  Submit
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
