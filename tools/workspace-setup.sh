############
# Workspace
############
npx create-nx-workspace@latest tf-test --preset="empty" --cli="nx"
cd tf-test
npm i -D @nrwl/react

############
# Apps
############
nx g @nrwl/react:app react-coding-test --style="styled-components" --routing
nx g @nrwl/react:component --name="navigation-bar" --directory="components/navigation-bar" --project react-coding-test --export=false
nx g @nrwl/react:component --name="home" --directory="components/home" --project react-coding-test --export=false
nx g @nrwl/react:component --name="radom-voting-list" --directory="containers/random-voting-list" --project react-coding-test --export=false

############
# Libs
############

# React UI lib
nx g @nrwl/react:lib ui --directory=react --style="styled-components"
nx g @nrwl/react:component --name="not-found" --directory="pages/not-found" --project react-ui --export
nx g @nrwl/react:component --name="nav-bar" --directory="nav/nav-bar" --project react-ui --export
nx g @nrwl/react:component --name="nav-logo" --directory="nav/nav-logo" --project react-ui --export
nx g @nrwl/react:component --name="nav-list" --directory="nav/nav-list" --project react-ui --export
nx g @nrwl/react:component --name="nav-list-item" --directory="nav/nav-list-item" --project react-ui --export
nx g @nrwl/react:component --name="text-input" --directory="forms/text-input" --project react-ui --export
nx g @nrwl/react:component --name="password-input" --directory="forms/password-input" --project react-ui --export
nx g @nrwl/react:component --name="email-input" --directory="forms/email-input" --project react-ui --export
nx g @nrwl/react:component --name="toggle-switch" --directory="forms/toggle-switch" --project react-ui --export

# React helpers util
nx g @nrwl/react:lib util-helpers --directory="react"

# react-coding-test input components feature
nx g @nrwl/react:lib feature-input-components --directory=react-coding-test --appProject=react-coding-test
nx g @nrwl/react:component --name="focusable-input" --directory="components/focusble-input" --project react-coding-test-feature-input-components --export

# react-coding-test voting list feature
nx g @nrwl/react:lib feature-voting-list --directory=react-coding-test --appProject=react-coding-test
nx g @nrwl/react:redux voting-list --project=react-coding-test-feature-voting-list --appProject=react-coding-test --directory=store
nx g @nrwl/react:component --name="voting-dashboard" --directory="containers/voting-dashboard" --project react-coding-test-feature-voting-list --export
nx g @nrwl/react:component --name="voting-stats" --directory="components/voting-stats" --project react-coding-test-feature-voting-list --export
nx g @nrwl/react:component --name="voting-list" --directory="components/voting-list" --project react-coding-test-feature-voting-list --export
nx g @nrwl/react:component --name="voting-list-item" --directory="components/voting-list-item" --project react-coding-test-feature-voting-list --export

# react-coding-test register form feature
nx g @nrwl/react:lib feature-register-form --directory=react-cod1ing-test --appProject=react-coding-test
nx g @nrwl/react:redux register-form --project=react-coding-test-feature-register-form --appProject=react-coding-test --directory=store
nx g @nrwl/react:component --name="signup-form" --directory="containers/signup-form" --project react-coding-test-feature-register-form --export
nx g @nrwl/react:component --name="signup-success" --directory="components/signup-success" --project react-coding-test-feature-register-form --export=false

# shared util libs
nx g @nrwl/workspace:lib util-voting-candidates --directory="shared"
nx g @nrwl/workspace:lib util-validators --directory="shared"
nx g @nrwl/workspace:lib util-formatters --directory="shared"
nx g @nrwl/workspace:lib util-generators --directory="shared"
nx g @nrwl/workspace:lib util-data --directory="shared"

# shared data-access libs
nx g @nrwl/workspace:lib data-access-signup-api --directory="shared"