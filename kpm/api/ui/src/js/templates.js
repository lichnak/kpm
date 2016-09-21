angular.module("kpm-ui").run(["$templateCache", function($templateCache) {$templateCache.put("app/modules/errors/404.html","<div class=\"error-404\">\n  Sorry, this page is not available.\n</div>\n");
$templateCache.put("app/modules/home/home.html","<div class=\"home\">\n  <p>\n    KPM is a tool to deploy and manage applications stack on Kubernetes.\n  </p>\n  <p>\n    KPM provides the glue between Kubernetes resources (ReplicatSet, DaemonSet, Secrets...). it defines a package as a composition of Kubernetes resources and dependencies to other packages.\n  </p>\n  <ul class=\"columns\">\n    <li>\n      <h2>Simplicity</h2>\n      <p> Keep it simple for both users and packagers.  </p>\n    </li>\n    <li>\n      <h2>Declarative and idempotent</h2>\n      <p> Declare what should be deployed and let the system apply only required changes.  </p>\n    </li>\n    <li>\n      <h2>Reproducible deployment</h2>\n      <p> For production and QA, control of each components is fundamental. Both, dependency declaration and version control in KPM allows to have a predictable application stack deployment.  </p>\n    </li>\n  </ul>\n  <p class=\"explore\">\n    <md-button class=\"md-raised md-primary\" ui-sref=\"packages\">\n      Explore {{count}} packages\n    </md-button>\n  </p>\n<div>\n");
$templateCache.put("app/modules/organization/organization.html","<div ng-if=\"organization\" class=\"organization\">\n  <h2>{{organization.name}}</h2>\n  <p>\n    {{organization.description}}\n  </p>\n  <p>\n    Joined on {{organization.created_at | date}}\n  </p>\n  <h3><i class=\"fa fa-users\"></i> Members</h3>\n  <div class=\"organization-users\">\n    <span ng-repeat=\"user in users\" class=\"{{user.perms}}\">\n      <a ui-sref=\"user({username: user.username})\">\n        <img ng-src=\"{{user.gravatar}}s=50\" />\n        <md-tooltip>\n        {{user.username}} ({{user.perms}})\n        </md-tooltip>\n      </a>\n    </span>\n  </div>\n</div>\n<p class=\"error-notice\" ng-if=\"!organization\">\n  {{error}}\n</p>\n");
$templateCache.put("app/modules/packages/_actions.html","  <div class=\"package-meta\">\n    <!-- <span> -->\n    <!--   <i class=\"fa fa-download\"></i> Downloads: {{package.downloads}} -->\n    <!-- </span> -->\n    <!-- <a href class=\"package-stars\" -->\n    <!--   ng-click=\"toggleStar(package)\" -->\n    <!--   ng-class=\"{starred: package.starred}\"> -->\n    <!--   <i href class=\"fa fa-star\" ></i> Stars: {{package.stars}} -->\n    <!--   <md-tooltip> -->\n    <!--     {{package.starred ? \'Unstar\' : \'Star\'}} this package! -->\n    <!--   </md-tooltip> -->\n    <!-- </a> -->\n  </div>\n");
$templateCache.put("app/modules/packages/list.html","<div class=\"package-wrapper\">\n  <p class=\"info-notice\" ng-if=\"queryParams.named_like && packages.length > 0\">\n    {{packages.length}} result(s) for <em>\"{{queryParams.named_like}}\"</em>\n  </p>\n  <p class=\"info-notice\" ng-if=\"search && packages.length == 0\">\n    Sorry, no results for <em>\"{{queryParams.named_like}}\"</em>\n  </p>\n  <p class=\"error-notice\" ng-if=\"error\">\n    {{error}}\n  </p>\n  <md-input-container>\n    <md-select\n      ng-model=\"selectedSort\"\n      md-on-close=\"applySort(selectedSort)\">\n      <md-option ng-repeat=\"(label, params) in availableSorts\" ng-value=\"params\">\n        <i class=\"fa fa-{{params.icon}}\"></i> {{label}}\n      </md-option>\n    </md-select>\n    <md-tooltip>\n      Sort packages\n    </md-tooltip>\n  </md-input-container>\n  <div\n    ng-include=\"\'app/modules/packages/preview.html\'\"\n    ng-repeat=\"package in packages\"\n    ng-controller=\"PackageController\"\n    ng-init=\"setPackage(package)\">\n  </div>\n</div>\n");
$templateCache.put("app/modules/packages/package.html","<div class=\"package\" ng-if=\"package\">\n  <ng-include src=\"\'app/modules/packages/_actions.html\'\"></ng-include>\n  <!-- <img ng-src=\"{{package.icon_url}}\" class=\"package-icon\" /> -->\n  <h2>\n    <a ui-sref=\"organization({name: package.organization})\" class=\"organization-name\">\n      {{package.organization}}</a> /\n    <a ui-sref=\"package({name: package.name})\">{{package.appname}}</a>\n  </h2>\n  <p>\n    {{package.description}}\n  </p>\n  <p>\n    <code>v{{package.version}}</code> - {{package.created_at | date}}\n  </p>\n  <p>\n    Available versions:\n    <md-input-container>\n      <md-select ng-model=\"package.version\" ng-change=\"selectVersion()\" placeholder=\"version\">\n        <md-option ng-repeat=\"version in package.available_versions\">\n          {{version}}\n        </md-option>\n      </md-select>\n    </md-input-container>\n  </p>\n\n  <h3 ng-if=\"package.dependencies.length > 0\" >Dependencies</h3>\n  <ol>\n    <li ng-repeat=\"dependency in package.dependencies\">\n      <a ui-sref=\"package({name: dependency})\">{{dependency}}</a>\n    </li>\n  </ol>\n  <!-- <h3>Variables and defaults</h3> -->\n  <!-- <div> -->\n  <!--   <table> -->\n  <!--     <tr ng-repeat=\"(name, default) in package.variables\"> -->\n  <!-- 	<td>{{name}}</td> -->\n  <!-- 	<td>{{default}}</td> -->\n  <!--     </tr> -->\n  <!--   </table> -->\n  <!-- </div> -->\n  <!-- <h3>Templates</h3> -->\n  <!-- <ol> -->\n  <!--   <li ng-repeat=\"resource in package.manifest.resources\"> -->\n  <!--     <code>{{resource.type}}</code> -->\n  <!--     {{resource.name}} -->\n  <!--     <a href ng-click=\"toggleResource(resource)\">{{resource.file}}</a> -->\n  <!--     <pre ng-if=\"resource.content\"><code prism=\"yaml\">{{resource.content}}</code></pre> -->\n  <!--   </li> -->\n  <!-- </ol> -->\n  <a href ng-click=\"downloadTarball($event)\" class=\"md-button md-raised\">\n    <md-tooltip>\n      Generate templates in tarball\n    </md-tooltip>\n    Generate\n  </a>\n</div>\n\n<p class=\"error-notice\" ng-if=\"error\">\n  {{error}}\n</p>\n\n<md-button class=\"md-raised\" ui-sref=\"packages\">Back</md-button>\n");
$templateCache.put("app/modules/packages/preview.html","<div class=\"package\">\n  <ng-include src=\"\'app/modules/packages/_actions.html\'\"></ng-include>\n  <!-- <img ng-src=\"{{package.icon_url}}\" class=\"package-icon\" /> -->\n  <h2>\n    <a ui-sref=\"organization({name: package.organization})\" class=\"organization-name\">\n      {{package.organization}}</a> /\n    <a ui-sref=\"package({name: package.name})\">{{package.appname}}</a>\n  </h2>\n  <code>v{{package.version}}</code> <!-- - Updated on {{package.updated_at | date}} -->\n</div>\n");
$templateCache.put("app/modules/settings/organizations.html","<h2>Organizations</h2>\n");
$templateCache.put("app/modules/settings/profile.html","<h2>My profile</h2>\n\n<h3>Change password</h3>\n<form class=\"app-form\">\n  <div class=\"row\">\n    <label>\n      <span>Current password</span>\n      <input type=\"password\" />\n    </label>\n  </div>\n  <div class=\"row\">\n    <label>\n      <span>New password</span>\n      <input type=\"password\" />\n    </label>\n  </div>\n  <div class=\"row\">\n    <label>\n      <span>Confirm new password</span>\n      <input type=\"password\" />\n    </label>\n  </div>\n  <div class=\"row\">\n    <md-button type=\"submit\" class=\"md-raised md-primary\">\n      Submit\n    </md-button>\n  </div>\n</form>\n");
$templateCache.put("app/modules/settings/settings.html","<div class=\"settings\">\n  <div class=\"sidebar\">\n    <a ui-sref=\".profile\" ui-sref-active=\"active\">\n      Profile\n    </a>\n    <a ui-sref=\".tokens\" ui-sref-active=\"active\">\n      Tokens\n    </a>\n    <a ui-sref=\".organizations\" ui-sref-active=\"active\">\n      Organizations\n    </a>\n  </div>\n  <div ui-view class=\"settings-content\">\n  </div>\n</div>\n");
$templateCache.put("app/modules/settings/tokens.html","<h2>Tokens</h2>\n\n<table class=\"tokens\">\n  <tr>\n    <th>Token</th>\n    <th>Created at</th>\n    <th>IP</th>\n    <!-- <th>Delete</th> -->\n  </tr>\n  <tr ng-repeat=\"token in tokens\">\n    <td>\n      <code ng-class=\"{current: session.isCurrent(token)}\">\n        {{token.authentication_token}}\n        <md-tooltip ng-if=\"session.isCurrent(token)\">\n          This is your current token\n        </md-tooltip>\n      </code>\n    </td>\n    <td>{{token.created_at | date}}</td>\n    <td>{{token.ip}}</td>\n    <td>\n      <!--\n      <a href ng-click=\"deleteToken(token)\" class=\"fa fa-times\"></a>\n      -->\n    </td>\n  </tr>\n</table>\n\n<md-button class=\"md-raised\" ng-click=\"loadTokens()\">\n  Refresh\n</md-button>\n");
$templateCache.put("app/modules/user/login.html","<h2>Login</h2>\n<form class=\"app-form\" ng-submit=\"submit()\">\n  <p class=\"error-notice\" ng-if=\"error\">\n    {{error}}\n  </p>\n  <div class=\"row\">\n    <label>\n      <span>Username</span>\n      <input type=\"text\" name=\"username\" ng-model=\"username\" required />\n    </label>\n  </div>\n  <div class=\"row\">\n    <label>\n      <span>Password</span>\n      <input type=\"password\" name=\"password\" ng-model=\"password\" required />\n    </label>\n  </div>\n  <div class=\"row\">\n    <md-button type=\"submit\" class=\"md-primary md-raised\">\n      Login\n    </md-button>\n  </div>\n</form>\n");
$templateCache.put("app/modules/user/signup.html","<h2>Create a new account</h2>\n<form class=\"app-form\" ng-submit=\"submit()\">\n  <ul class=\"error-notice\" ng-if=\"errors\">\n    <li ng-repeat=\"error in errors\">{{error}}</li>\n  </ul>\n  <div class=\"row\">\n    <label>\n      <span>Username</span>\n      <input type=\"text\" ng-model=\"username\" required />\n    </label>\n  </div>\n  <div class=\"row\">\n    <label>\n      <span>E-mail</span>\n      <input type=\"email\" ng-model=\"email\" required />\n    </label>\n  </div>\n  <div class=\"row\">\n    <label>\n      <span>Password</span>\n      <input type=\"password\" ng-model=\"password\" required />\n    </label>\n  </div>\n  <div class=\"row\">\n    <label>\n      <span>Password confirmation</span>\n      <input type=\"password\" ng-model=\"password_confirmation\" required />\n    </label>\n  </div>\n  <div class=\"row\">\n    <md-button type=\"submit\" class=\"md-raised md-primary\">\n      Sign-up\n    </md-button>\n  </div>\n</form>\n");
$templateCache.put("app/modules/user/user.html","<div class=\"user\" ng-if=\"user\">\n  <div class=\"user-profile\">\n    <h2>{{user.username}}</h2>\n    <p>\n      <img ng-src=\"{{user.gravatar}}?s=200\" />\n    </p>\n    <ul>\n      <li>{{user.email}}</li>\n      <li>Joined on {{user.created_at | date}}</li>\n    </ul>\n    <p ng-if=\"user.username == session.user.username\">\n      <md-button ui-sref=\"settings.profile\" class=\"md-raised\">\n        Edit my profile\n      </md-button>\n    </p>\n  </div>\n  <div class=\"user-packages\">\n    <div\n      ng-include=\"\'app/modules/packages/preview.html\'\"\n      ng-repeat=\"package in user.packages\"\n      ng-controller=\"PackageController\"\n      ng-init=\"setPackage(package)\">\n    </div>\n    <p ng-if=\"user.packages.length == 0\" class=\"info-notice\">\n      <strong>{{user.username}}</strong> hasn\'t published any packages yet.\n    </p>\n  </div>\n</div>\n<p class=\"error-notice\" ng-if=\"error\">\n  {{error}}\n</p>\n");}]);