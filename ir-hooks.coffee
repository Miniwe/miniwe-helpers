IR_BeforeHooks =
  requireLogin: ->
    unless Meteor.user()
      if Meteor.loggingIn()
        @render @loadingTemplate
      else
        @render 'accessDenied'
    else
      @next()
  clearErrors: ->
    Errors.clearErrors()
    @next()
