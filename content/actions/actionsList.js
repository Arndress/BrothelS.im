define([
  'Simple',
  'Prostitution',
  'specialParty',
  'Schools'
].Cprefix('./'), function() {
  var args = Array.prototype.slice.call(arguments, 0);
  return args.Cflatten().CtoObject('_id');
});