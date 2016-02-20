// Client render (optional):
if (typeof document !== 'undefined') {
  // Client render code goes here...
}

// Exported static site renderer.
// @param locals.path - The path currently being rendered
// @param locals.assets - An object containing all assets
// @param locals.webpackStats - Advanced: Webpack's stats object
//
module.exports = function render(locals, callback) {
  console.log('locals', locals);
  callback(null, '<html>...</html>');
};