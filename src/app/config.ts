import { TreeSelect } from './shared/styles/components/dropdown-tree-select/treeSelect';

export const MAX_AGE = 60;
export const MIN_AGE = 20;

export const dateOfBirth: string = new Date(
  86400000 * Math.floor(Math.random() * 33 * 365)
)
  .toISOString()
  .slice(0, 10);
export const phoneCode = ['07', '03', '08', '05'];

export const pools = [
  'brse',
  'devops',
  'marketing',
  'ke-toan',
  'sale',
  'hanh-chinh-hr',
  'kinh-doanh',
  'fullstack',
  'truong-phong',
  'ui-ux',
  'qc-qa',
  'dba',
  'ta',
];
export const firstNames = [
  'Anh Hao',
  'Ngoc Huy',
  'Duc Thanh',
  'Duc Hien',
  'Thanh Phong',
  'Thien Trong',
  'Duc Hoang',
  'Hai Dang',
  'Quoc Uy',
  'Thanh Phuong',
  'Nhat Linh',
  'Hong Quan',
  'Dang Khoa',
  'Thanh Truc',
  'Nha Ky',
  'Minh Hang',
  'Huong Ly',
  'Huong Tram',
  'Hong Nga',
  'Lam Anh',
];
export const lastNames = [
  'Nguyen',
  'Tran',
  'Ly',
  'Le',
  'Pham',
  'Dao',
  'Tang',
  'Dang',
  'Hoang',
  'Huynh',
  'Ho',
  'Phan',
  'Vo',
  'Khuong',
  'Ong',
  'Cao',
  'Luong',
  'Duong',
  'Ton That',
  'Ton Nu',
];
export const jobTitles = [
  'Web Developer',
  'Front-End Developer',
  'Php Developer',
  'Back-End Developer',
  'Game Developer',
  'DevOps',
  'Tester',
  'Python Developer',
  'Data Analyst',
  'Data Engineer',
  'Business Analyst',
];
export const sources = [
  'referral',
  'careerbuilder.vn',
  'recruiter',
  'jobstreet',
  'careerlink',
  'vietnamworks',
  'upload',
  'jobsite',
  'vieclam24',
  'topdev',
];
export const tags = [
  'HTML',
  'PHP',
  'CSS',
  'JS',
  'C#',
  'C++',
  'C',
  'PYTHON',
  'RUBY',
  'JAVA',
];

export const quickFilter: { name: string; value: string[] }[] = [
  {
    name: 'CSS',
    value: ['#CSS'],
  },
  {
    name: 'HTML',
    value: ['#HTML'],
  },
  {
    name: 'PYTHON',
    value: ['#PYTHON'],
  },
];
export const listOfFilters: TreeSelect[] = [
  Object.assign(new TreeSelect(), {
    key: 'tags',
    label: 'Kỹ năng',
    value: tags.map((item) => ({ text: item, label: item, value: false })),
  }),
  Object.assign(new TreeSelect(), {
    key: 'jobTitle',
    label: 'Vị trí tuyển dụng',
    value: jobTitles.map((item) => ({ text: item, label: item, value: false })),
  }),
  Object.assign(new TreeSelect(), {
    key: 'source',
    label: 'Nguồn',
    value: sources.map((item) => ({ text: item, label: item, value: false })),
  }),
  Object.assign(new TreeSelect(), {
    key: 'address',
    label: 'Địa chỉ',
    value: [
      { text: 'california', label: 'California', value: false },
      { text: 'ho-chi-minh', label: 'Ho Chi Minh', value: false },
    ],
  }),
];

export const sortRecruitment: TreeSelect[] = [
  Object.assign(new TreeSelect(), {
    key: 'name',
    label: 'Tên',
    value: [
      { text: 'asc', label: 'a-Z', value: false },
      { text: 'desc', label: 'Z-a', value: false },
    ],
  }),
  Object.assign(new TreeSelect(), {
    key: 'createdAt',
    label: 'Ngày ứng tuyển',
    value: [
      { text: 'asc', label: 'tăng dần', value: false },
      { text: 'desc', label: 'giảm dần', value: false },
    ],
  }),
  Object.assign(new TreeSelect(), {
    key: 'skill',
    label: 'Đánh giá',
    value: [
      { text: 'asc', label: 'tăng dần', value: false },
      { text: 'desc', label: 'giảm dần', value: false },
    ],
  }),
];

export const filterRecruitment: TreeSelect[] = [
  Object.assign(new TreeSelect(), {
    key: 'status',
    label: 'Trạng thái',
    value: [
      { text: 'pending', label: 'Đang đợi', value: false },
      { text: 'reject', label: 'Từ chối', value: false },
    ],
  }),
];

export type FilterKeyRecruitment = 'status';
