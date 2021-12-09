using {h2o} from './external/h2o.csn';

service WaterService {
    entity H2OFlowmeterData as SELECT FROM h2o.H2OFlowmeterData;
    entity H2OCityNewConnections as SELECT FROM h2o.H2OCityNewConnections;
}