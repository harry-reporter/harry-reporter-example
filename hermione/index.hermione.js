describe('Section', () => {

  it('Test', function() {
    return this.browser
      .url('/')
      .assertView('page view', 'body');
  });

});
