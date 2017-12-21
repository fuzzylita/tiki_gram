Rails.application.config.middleware.use OmniAuth::Builder do
  provider :instagram, ENV['INSTAGRAM_ID'], ENV['INSTAGRAM_SECRET'], {
    scope: 'basic+media+public_content+follower_list+comments+relationships+likes', 
    provider_ignores_state: true
  }
end