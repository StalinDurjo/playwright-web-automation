// Silence is golden

import RestUtils from "support/rest-utils";
import { isSetupRequired } from "support/testability";
import SimpleScore from "support/utils/simple-score";

(async () => {
  // const rest = new RestUtils({ baseUrl: "http://localhost:9999" });
  // rest.setBasicAuth("admin", "password");
  // console.log(await rest.isTaxEnabled());
  // const score = new SimpleScore(68);
  // // score.addMeasure(1);
  // // score.addMeasure(1);
  // score.addMeasure(0);
  // score.addMeasure(0);
  // console.log(score.calculate());

  console.log(await isSetupRequired("http://localhost:9999"));
})();
