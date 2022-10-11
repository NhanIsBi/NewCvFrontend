import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { competiton, event, scholarship } from '../model/news.model';

@Injectable({
  providedIn: 'root',
})
export class newsService {
  public listviet = [
    'à',
    'á',
    'ạ',
    'ả',
    'ã',
    'â',
    'ầ',
    'ấ',
    'ậ',
    'ẩ',
    'ẫ',
    'ă',
    'ằ',
    'ắ',
    'ặ',
    'ẳ',
    'ẵ',
    'è',
    'é',
    'ẹ',
    'ẻ',
    'ẽ',
    'ê',
    'ề',
    'ế',
    'ệ',
    'ể',
    'ễ',
    'ì',
    'í',
    'ị',
    'ỉ',
    'ĩ',
    'ò',
    'ó',
    'ọ',
    'ỏ',
    'õ',
    'ô',
    'ồ',
    'ố',
    'ộ',
    'ổ',
    'ỗ',
    'ơ',
    'ờ',
    'ớ',
    'ợ',
    'ở',
    'ỡ',
    'ù',
    'ú',
    'ụ',
    'ủ',
    'ũ',
    'ư',
    'ừ',
    'ứ',
    'ự',
    'ử',
    'ữ',
    'ỳ',
    'ý',
    'ỵ',
    'ỷ',
    'ỹ',
    'đ',
  ];
  public conditionDup = false;
  public scholarship = new scholarship();
  public listScholarship: scholarship[] = [];
  public listEvent: event[] = [];
  public listCompetiton: competiton[] = [];
  constructor(private http: HttpClient) {
    this.initlistScholarship();
    this.initlistEvent();
    this.initlistCompetiton();
  }
  urlPath = 'http://localhost:3000/' + 'criteria';
  getListScholarship() {
    return of(this.listScholarship);
  }
  getAllTalents() {
    return this.http.get(this.urlPath);
  }
  getTalent(id: string) {
    return this.http.get(`${this.urlPath}/${id}`);
  }

  createTalent(data: any) {
    return this.http.post(`${this.urlPath}`, data);
  }

  updateTalent(data: any) {
    return this.http.post(`${this.urlPath}/${data._id}`, data);
  }
  deleteTalent(id: string) {
    return this.http.delete(`${this.urlPath}/${id}`);
  }

  initlistScholarship() {
    this.listScholarship.push({
      id: 'r7nh4ssd8js83nrhffhs2vb0',
      scholarship: 'Pending Pool',
      level: 'Cử nhân',
      majors: 'Kinh tế',
      location: 'Đức',
      descriptions:
        'Đây là Talent Pool mặc định được hệ thống tự động tạo ra để lưu thông tin ứng viên trong trường hợp không thể tìm thấy bài đăng tuyển tương ứng.',
    });
    this.listScholarship.push({
      id: 'j8dh45gd8js83nrh8dhs8h3e',
      scholarship: 'DevOps',
      level: 'Thạc sĩ',
      majors: 'Công nghệ thông tin',
      location: 'Mỹ',
      descriptions: 'Đây là nhóm DevOps',
    });
    this.listScholarship.push({
      id: '6295bfd471ea517f1c2e4593',
      scholarship: 'Hành chính - HR',
      level: 'Kiến trúc sư',
      majors: 'Kiến trúc',
      location: 'Nga',
      descriptions: 'Đây là nhóm Hành chính - nhân sự',
    });
    this.listScholarship.push({
      id: '629aa6e9fd31520018e406bb',
      scholarship: 'BrSE',
      level: '',
      majors: '',
      location: '',
      descriptions: 'Đây là nhóm BrSE',
    });
    this.listScholarship.push({
      id: '629ebee1fd31520018e58d30',
      scholarship: 'Kinh doanh',
      level: '',
      majors: '',
      location: '',
      descriptions: 'Đây là nhóm Kinh doanh',
    });
    this.listScholarship.push({
      id: '629f3db1fd31520018e5e920',
      scholarship: 'Fullstack',
      level: '',
      majors: '',
      location: '',
      descriptions: 'Đây là nhóm Fullstack',
    });
    this.listScholarship.push({
      id: '62a6b117e189bb43b24ca105',
      scholarship: 'Sale',
      level: '',
      majors: '',
      location: '',
      descriptions: 'Đây là nhóm Sale',
    });
    this.listScholarship.push({
      id: '6295bfd471ea517f1c2e4599',
      scholarship: 'Marketing',
      level: '',
      majors: '',
      location: '',
      descriptions: '',
    });
    this.listScholarship.push({
      id: 'j8dh45gd8js83nrh8dhs8h39',
      scholarship: 'Kế toán',
      level: '',
      majors: '',
      location: '',
      descriptions: '',
    });
    this.listScholarship.push({
      id: 'r7nh4ssd8js83nrhffhs2vb9',
      scholarship: 'Trưởng phòng',
      level: '',
      majors: '',
      location: '',
      descriptions: '',
    });
    this.listScholarship.push({
      id: '629aa6e9fd31520018e406b9',
      scholarship: 'UI/UX',
      level: '',
      majors: '',
      location: '',
      descriptions: 'Đây là nhóm UI/UX',
    });
    this.listScholarship.push({
      id: '629ebee1fd31520018e58d39',
      scholarship: 'QC/QA',
      level: '',
      majors: '',
      location: '',
      descriptions: 'Đây là nhóm QC/QA',
    });
    this.listScholarship.push({
      id: '629f3db1fd31520018e5e929',
      scholarship: 'DBA',
      level: '',
      majors: '',
      location: '',
      descriptions: 'Đây là nhóm DBA',
    });
    this.listScholarship.push({
      id: '62a6b117e189bb43b24ca109',
      scholarship: 'TA',
      level: '',
      majors: '',
      location: '',
      descriptions: '',
    });
  }
  initlistEvent() {
    this.listEvent.push({
      id: 'r7nh4ssd8js83nrhffhs2vb0',
      category: 'Event 1',
      location: 'Đức',
      descriptions:
        'Đây là Talent Pool mặc định được hệ thống tự động tạo ra để lưu thông tin ứng viên trong trường hợp không thể tìm thấy bài đăng tuyển tương ứng.',
    });
    this.listEvent.push({
      id: 'j8dh45gd8js83nrh8dhs8h3e',
      category: 'Event 2',
      location: 'Mỹ',
      descriptions: 'Đây là nhóm DevOps',
    });
    this.listEvent.push({
      id: '6295bfd471ea517f1c2e4593',
      category: 'Event 2.1',
      location: 'Nga',
      descriptions: 'Đây là nhóm Hành chính - nhân sự',
    });
    this.listEvent.push({
      id: '629aa6e9fd31520018e406bb',
      category: 'Event 3',
      location: '',
      descriptions: 'Đây là nhóm BrSE',
    });
    this.listEvent.push({
      id: '629ebee1fd31520018e58d30',
      category: 'Event 4',
      location: '',
      descriptions: 'Đây là nhóm Kinh doanh',
    });
    this.listEvent.push({
      id: '629f3db1fd31520018e5e920',
      category: 'Event 5',
      location: '',
      descriptions: 'Đây là nhóm Fullstack',
    });
    this.listEvent.push({
      id: '62a6b117e189bb43b24ca105',
      category: 'Event 6',
      location: '',
      descriptions: 'Đây là nhóm Sale',
    });
    this.listEvent.push({
      id: '6295bfd471ea517f1c2e4599',
      category: 'Event 7',
      location: '',
      descriptions: '',
    });
    this.listEvent.push({
      id: 'j8dh45gd8js83nrh8dhs8h39',
      category: 'Event 8',
      location: '',
      descriptions: '',
    });
    this.listEvent.push({
      id: 'r7nh4ssd8js83nrhffhs2vb9',
      category: 'Event 9',
      location: '',
      descriptions: '',
    });
    this.listEvent.push({
      id: '629aa6e9fd31520018e406b9',
      category: 'Event 10',
      location: '',
      descriptions: 'Đây là nhóm UI/UX',
    });
    this.listEvent.push({
      id: '629ebee1fd31520018e58d39',
      category: 'Event 11',
      location: '',
      descriptions: 'Đây là nhóm QC/QA',
    });
    this.listEvent.push({
      id: '629f3db1fd31520018e5e929',
      category: 'Event 12',
      location: '',
      descriptions: 'Đây là nhóm DBA',
    });
    this.listEvent.push({
      id: '62a6b117e189bb43b24ca109',
      category: 'Event 13',
      location: '',
      descriptions: '',
    });
  }
  initlistCompetiton() {
    this.listCompetiton.push({
      id: 'r7nh4ssd8js83nrhffhs2vb0',
      category: 'Recruit 1',
      location: 'Đức',
      descriptions:
        'Đây là Talent Pool mặc định được hệ thống tự động tạo ra để lưu thông tin ứng viên trong trường hợp không thể tìm thấy bài đăng tuyển tương ứng.',
    });
    this.listCompetiton.push({
      id: 'j8dh45gd8js83nrh8dhs8h3e',
      category: 'Recruit 2',
      location: 'Mỹ',
      descriptions: 'Đây là nhóm DevOps',
    });
    this.listCompetiton.push({
      id: '6295bfd471ea517f1c2e4593',
      category: 'Recruit 3',
      location: 'Nga',
      descriptions: 'Đây là nhóm Hành chính - nhân sự',
    });
    this.listCompetiton.push({
      id: '629aa6e9fd31520018e406bb',
      category: 'Recruit 4',
      location: '',
      descriptions: 'Đây là nhóm BrSE',
    });
    this.listCompetiton.push({
      id: '629ebee1fd31520018e58d30',
      category: 'Recruit 5',
      location: '',
      descriptions: 'Đây là nhóm Kinh doanh',
    });
    this.listCompetiton.push({
      id: '629f3db1fd31520018e5e920',
      category: 'Recruit 6',
      location: '',
      descriptions: 'Đây là nhóm Fullstack',
    });
    this.listCompetiton.push({
      id: '62a6b117e189bb43b24ca105',
      category: 'Recruit 7',
      location: '',
      descriptions: 'Đây là nhóm Sale',
    });
    this.listCompetiton.push({
      id: '6295bfd471ea517f1c2e4599',
      category: 'Recruit 8',
      location: '',
      descriptions: '',
    });
    this.listCompetiton.push({
      id: 'j8dh45gd8js83nrh8dhs8h39',
      category: 'Recruit 9',
      location: '',
      descriptions: '',
    });
    this.listCompetiton.push({
      id: 'r7nh4ssd8js83nrhffhs2vb9',
      category: 'Recruit 10',
      location: '',
      descriptions: '',
    });
    this.listCompetiton.push({
      id: '629aa6e9fd31520018e406b9',
      category: 'Recruit 11',
      location: '',
      descriptions: 'Đây là nhóm UI/UX',
    });
    this.listCompetiton.push({
      id: '629ebee1fd31520018e58d39',
      category: 'Recruit 12',
      location: '',
      descriptions: 'Đây là nhóm QC/QA',
    });
    this.listCompetiton.push({
      id: '629f3db1fd31520018e5e929',
      category: 'Recruit 13',
      location: '',
      descriptions: 'Đây là nhóm DBA',
    });
    this.listCompetiton.push({
      id: '62a6b117e189bb43b24ca109',
      category: 'Recruit 14',
      location: '',
      descriptions: '',
    });
  }

  create(scholar: scholarship) {
    this.listScholarship.unshift(scholar);
  }
  update(scholar: scholarship) {
    this.listScholarship.forEach((scholarship: scholarship, idx: number) => {
      if (scholarship.id == scholar.id) {
        this.listScholarship[idx] = scholar;
        return;
      }
    });
  }
  delete(scholar: scholarship) {
    for (let i = 0; i < this.listScholarship.length; i++) {
      if (this.listScholarship[i] === scholar) {
        this.listScholarship.splice(i, 1);
      }
    }
  }

  deleteById(id: string) {
    this.listScholarship.forEach((scholarship: scholarship, idx: number) => {
      if (scholarship.id == id) {
        this.listScholarship.splice(idx, 1);
      }
    });
  }

  // public getscholarshipInfo(id?: string): Observable<scholarship | undefined> {
  //   if (!id) {
  //     return of(emptyscholarshipInformation);
  //   }
  //   return of(this.listScholarship.find((item) => item.id === id));
  // }
  public getRandomId(): string {
    let text = '';
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 24; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  public isscholarshipExist(id: string) {
    return this.listScholarship.find((item) => item.id === id) ? true : false;
  }

  public getscholarship(id: string) {
    return this.listScholarship.find((item) => item.id === id);
  }
  checkVietnames(str: string) {
    str = str.toLowerCase();
    if (this.listviet.includes(str)) {
      return true;
    } else {
      return false;
    }
  }
  public toLowerCaseNonAccentVietnamese(value: string, searchText?: string) {
    value = value.toLowerCase();
    if (searchText && this.checkVietnames(searchText)) {
      return value;
    } else {
      //     We can also use this instead of from line 11 to line 17
      //     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
      //     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
      //     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
      //     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
      //     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
      //     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
      //     str = str.replace(/\u0111/g, "d");
      value = value.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
      value = value.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
      value = value.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
      value = value.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
      value = value.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
      value = value.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
      value = value.replace(/đ/g, 'd');
      // Some system encode vietnamese combining accent as individual utf-8 characters
      value = value.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
      value = value.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
      return value;
    }
  }
}
