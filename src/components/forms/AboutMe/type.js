import type { Props as Skills } from '../../commons/ProgressBars/type';
import type { Props as BasicInfo } from './components/BasicInformation/type';

export type Props = {
  title: string,
  greeting: string,
  summary: string,
  basicInfo: BasicInfo,
  skills: Skills,
};
