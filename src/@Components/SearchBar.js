import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo({ options = [], value = '', setValue = () => { } }) {
  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(e) => setValue(e.target.outerText || '')}
        freeSolo
        sx={{ maxWidth: 400, m: 1, mt: 3 }}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(e) => setValue(e.target.value)}
            label="Search for products"
          />
        )}
      />
    </div>
  );
}
