$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/aathi/eclipse-workspace/Cucumber/src/main/java/com/ADM/cucumber/feature/fbhome.feature");
formatter.feature({
  "line": 1,
  "name": "Reach newsfeeds in FB",
  "description": "",
  "id": "reach-newsfeeds-in-fb",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#@Smoke"
    },
    {
      "line": 5,
      "value": "#Scenario Outline: Login with credentials"
    },
    {
      "line": 6,
      "value": "#Given Open FB login page"
    },
    {
      "line": 7,
      "value": "#Then Enter User ID \"\u003cid\u003e\" and Password \"\u003cpassword\u003e\""
    },
    {
      "line": 8,
      "value": "#Then Click Login Button"
    },
    {
      "line": 9,
      "value": "#Examples:"
    },
    {
      "line": 10,
      "value": "#|id|password|"
    },
    {
      "line": 11,
      "value": "#|abcd|hai|"
    },
    {
      "line": 12,
      "value": "#|hello|abcd|"
    }
  ],
  "line": 15,
  "name": "Login with credentials",
  "description": "",
  "id": "reach-newsfeeds-in-fb;login-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open FB login page \"\u003cTotal Rounds\u003e\" \"\u003cTotal Values\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter User ID and Password",
  "rows": [
    {
      "cells": [
        "321",
        "pasword"
      ],
      "line": 18
    },
    {
      "cells": [
        "1234",
        "asdf"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click Login Button",
  "rows": [
    {
      "cells": [
        "Rounds",
        "Values"
      ],
      "line": 21
    },
    {
      "cells": [
        "Round 1",
        "Value 1"
      ],
      "line": 22
    },
    {
      "cells": [
        "Round 2",
        "Value 2"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "reach-newsfeeds-in-fb;login-with-credentials;",
  "rows": [
    {
      "cells": [
        "Total Rounds",
        "Total Values"
      ],
      "line": 27,
      "id": "reach-newsfeeds-in-fb;login-with-credentials;;1"
    },
    {
      "cells": [
        "12",
        "All first Value"
      ],
      "line": 28,
      "id": "reach-newsfeeds-in-fb;login-with-credentials;;2"
    },
    {
      "cells": [
        "2",
        "All Second Value"
      ],
      "line": 29,
      "id": "reach-newsfeeds-in-fb;login-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 303400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "This tests dataTable as list and maps",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 28,
  "name": "Login with credentials",
  "description": "",
  "id": "reach-newsfeeds-in-fb;login-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open FB login page \"12\" \"All first Value\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter User ID and Password",
  "rows": [
    {
      "cells": [
        "321",
        "pasword"
      ],
      "line": 18
    },
    {
      "cells": [
        "1234",
        "asdf"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click Login Button",
  "rows": [
    {
      "cells": [
        "Rounds",
        "Values"
      ],
      "line": 21
    },
    {
      "cells": [
        "Round 1",
        "Value 1"
      ],
      "line": 22
    },
    {
      "cells": [
        "Round 2",
        "Value 2"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 20
    },
    {
      "val": "All first Value",
      "offset": 25
    }
  ],
  "location": "FBstepDef.open_FB_login_page(int,String)"
});
formatter.result({
  "duration": 163521200,
  "status": "passed"
});
formatter.match({
  "location": "FBstepDef.enter_User_ID_and_Password(DataTable)"
});
formatter.result({
  "duration": 1574300,
  "status": "passed"
});
formatter.match({
  "location": "FBstepDef.click_Login_Button(DataTable)"
});
formatter.result({
  "duration": 506700,
  "status": "passed"
});
formatter.after({
  "duration": 178900,
  "status": "passed"
});
formatter.before({
  "duration": 118200,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "This tests dataTable as list and maps",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 29,
  "name": "Login with credentials",
  "description": "",
  "id": "reach-newsfeeds-in-fb;login-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open FB login page \"2\" \"All Second Value\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter User ID and Password",
  "rows": [
    {
      "cells": [
        "321",
        "pasword"
      ],
      "line": 18
    },
    {
      "cells": [
        "1234",
        "asdf"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click Login Button",
  "rows": [
    {
      "cells": [
        "Rounds",
        "Values"
      ],
      "line": 21
    },
    {
      "cells": [
        "Round 1",
        "Value 1"
      ],
      "line": 22
    },
    {
      "cells": [
        "Round 2",
        "Value 2"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "All Second Value",
      "offset": 24
    }
  ],
  "location": "FBstepDef.open_FB_login_page(int,String)"
});
formatter.result({
  "duration": 210000,
  "status": "passed"
});
formatter.match({
  "location": "FBstepDef.enter_User_ID_and_Password(DataTable)"
});
formatter.result({
  "duration": 780200,
  "status": "passed"
});
formatter.match({
  "location": "FBstepDef.click_Login_Button(DataTable)"
});
formatter.result({
  "duration": 315500,
  "status": "passed"
});
formatter.after({
  "duration": 109300,
  "status": "passed"
});
});