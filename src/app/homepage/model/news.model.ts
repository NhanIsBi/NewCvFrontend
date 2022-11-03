export class scholarship {
  id = '';
  scholarship = '';
  level = '';
  majors = '';
  location = '';
  descriptions = '';
}
export class event {
  id = '';
  category = '';
  location = '';
  descriptions = '';
}
export class competiton {
  id = '';
  category = '';
  location = '';
  descriptions = '';
}
export class user {
  id = 0;
  email = '';
  name = '';
  password = '';
}
export class Recruit {
  id: number;
  code: string;
  datePost: string;
  dateUpdate: string;
  type: string;
  codeCategory: string;
  userId: number;
  title: string;
  shortContent: string;
  thumbnail: string;
  status: string;
  link: string;
  numLike: number;
  numDisLike: number;
  companyCode: string;
  experience: string;
  salary: string;
  location: string;
  major: string;
  position: string;
  language: string;
  level: string;
  startTime: string;
  endTime: string;
  introduction: string;
  description: string;
  requirement: string;
  treatment: string;
  contact: string;
  constructor(clone?: Recruit) {
    if (clone) {
      this.id = clone.id;
      this.code = clone.code;
      this.datePost = clone.datePost;
      this.dateUpdate = clone.dateUpdate;
      this.type = clone.type;
      this.codeCategory = clone.codeCategory;
      this.userId = clone.userId;
      this.title = clone.title;
      this.shortContent = clone.shortContent;
      this.thumbnail = clone.thumbnail;
      this.status = clone.status;
      this.link = clone.link;
      this.numLike = clone.numLike;
      this.numDisLike = clone.numDisLike;
      this.companyCode = clone.companyCode;
      this.experience = clone.experience;
      this.salary = clone.salary;
      this.location = clone.location;
      this.major = clone.major;
      this.position = clone.position;
      this.language = clone.language;
      this.level = clone.level;
      this.startTime = clone.startTime;
      this.endTime = clone.endTime;
      this.introduction = clone.introduction;
      this.description = clone.description;
      this.requirement = clone.requirement;
      this.treatment = clone.treatment;
      this.contact = clone.contact;
    } else {
      this.id = 0;
      this.code = '';
      this.datePost = '';
      this.dateUpdate = '';
      this.type = '';
      this.codeCategory = '';
      this.userId = 0;
      this.title = '';
      this.codeCategory = '';
      this.userId = 0;
      this.title = '';
      this.shortContent = '';
      this.thumbnail = '';
      this.status = '';
      this.link = '';
      this.numLike = 0;
      this.numDisLike = 0;
      this.companyCode = '';
      this.experience = '';
      this.salary = '';
      this.location = '';
      this.major = '';
      this.position = '';
      this.language = '';
      this.level = '';
      this.startTime = '';
      this.endTime = '';
      this.introduction = '';
      this.description = '';
      this.requirement = '';
      this.treatment = '';
      this.contact = '';
    }
  }
}
export class ResponseObject {
  errorCode = '';
  status: Number = new Number();
  message = '';
  data: any;
}
