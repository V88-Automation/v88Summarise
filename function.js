window.function = function (input,maxLength,suffix)
{

  // Initialise our local variables
  let i = input.value ?? '';
  let ml = maxLength.value ?? 1;
  let s = suffix.value ?? '...';

  // Replace all linefeed (\n) and carriage return (\r) with a space
  let t = i.replace(/[\n\r]/g,' ');

  // Replace all multiple spaces with a single space
  let r = t.replace(/\s+/g,' ');
  
  // Check if r is empty
  if (r == '')
  {
    return(r);
  }

  // Check if r is just a space
  if (r == ' ')
  {
    return('');
  }

  
  // Check if length is within limit
  if (r.length <= ml)
  {
    return r;
  }  

  // Truncate and add suffix
  return r.slice(0,ml) + s;
}
