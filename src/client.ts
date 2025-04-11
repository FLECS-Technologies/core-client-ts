import { AppsApi, ConsoleApi, DeploymentsApi, DeviceApi, FlecsportApi, InstancesApi, JobsApi, SystemApi } from '../typescript-axios/api';
import { Configuration } from '../typescript-axios/configuration';


const config = new Configuration({ basePath: getBaseURL() });

function getBaseURL(): string {
  return host() + baseURL()
}

function host() {
  let target = ''
  if (process.env.REACT_APP_ENVIRONMENT === 'development') {
    target = process.env.REACT_APP_DEV_CORE_URL || ''
  }
  return target
}

function baseURL() {
  if (
    process.env.REACT_APP_ENVIRONMENT === 'test' ||
    process.env.REACT_APP_ENVIRONMENT === 'development'
  ) {
    return '/api/v2'
  }
  return '../api/v2'
}

export const api = {
    app: new AppsApi(config),
    device: new DeviceApi(config),
    console: new ConsoleApi(config),
    deployments: new DeploymentsApi(config),
    export: new FlecsportApi(config),
    instances: new InstancesApi(config),
    jobs: new JobsApi(config),
    system: new SystemApi(config),
};
