import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { listOfVietnamese } from 'src/app/shared/config';
import { ComFrame } from '../../model/competence-frames.model';
import { Recruit, ResponseObject } from '../../model/news.model';

@Injectable({
  providedIn: 'root',
})
export class CompetenceFramesService {
  public listviet = listOfVietnamese;
  public conditionDup = false;
  public comframe = new ComFrame();
  public listCom: ComFrame[] = [];
  public recruit = new Recruit();
  public listRecruit: Recruit[] = [];
  urlPath =
    'http://newscv-env.eba-3k8gbtyu.ap-southeast-1.elasticbeanstalk.com';
  private refreshBehavior = new BehaviorSubject<number>(0);
  public getRefresh() {
    return this.refreshBehavior;
  }
  public refresh() {
    this.refreshBehavior.next(this.refreshBehavior.value + 1);
  }
  public getListOfCompetences() {
    return of(this.listRecruit);
  }
  constructor(private http: HttpClient) {
    // this.initListPoola();
    // console.log('initListPoola', this.initListPoola());
    this.initListPool();
    // console.log('initListPool', this.initListPool());
  }
  initListPool() {
    this.getListRecruit().subscribe((res) => {
      this.listRecruit = res.data;

      // this.listRecruit.push(
      //   Object.assign(new Recruit(), res.data, console.log('data', res.data))
      // );
      console.log('listRecruit', this.listRecruit);
      // if (this.subjects == null) {
      //   this.message.success('Đăng nhập thất bại');
      // } else {
      //   this.message.success('Đăng nhập thành công');
      //   this.router.navigate(['./homepage/page']);
      //   this.homepagecom.isShow = true;
      // }
    });
  }
  initListPoola() {
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: 'r7nh4ssd8js83nrhffhs2vb0',
        name: 'Pending Pool',
        description:
          'Đây là Talent Pool mặc định được hệ thống tự động tạo ra để lưu thông tin ứng viên trong trường hợp không thể tìm thấy bài đăng tuyển tương ứng.',
        competences: [
          'chơi1',
          'học1',
          'đá bóng1',
          'thể thao1',
          'âm nhạc1',
          'tiếng anh1',
          'kỹ năng mềm1',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: 'j8dh45gd8js83nrh8dhs8h3e',
        name: 'DevOps',
        description: 'Đây là nhóm DevOps',
        competences: [
          'chơi2',
          'học2',
          'đá bóng2',
          'thể thao2',
          'âm nhạc2',
          'tiếng anh2',
          'kỹ năng mềm2',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '6295bfd471ea517f1c2e4593',
        name: 'Hành chính - HR',
        description: 'Đây là nhóm Hành chính - nhân sự',
        competences: [
          'chơi3',
          'học3',
          'đá bóng3',
          'thể thao3',
          'âm nhạ3c',
          'tiếng anh3',
          'kỹ năng mềm3',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629aa6e9fd31520018e406bb',
        name: 'BrSE',
        description: 'Đây là nhóm BrSE',
        competences: [
          'chơi4',
          'học4',
          'đá bóng4',
          'thể thao4',
          'âm nhạc4',
          'tiếng anh4',
          'kỹ năng mềm4',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629aa6e9fd31520018e406bt',
        name: 'DevOps',
        description: 'Đây là nhóm DevOps',
        competences: [
          'chơi4',
          'học4',
          'đá bóng4',
          'thể thao4',
          'âm nhạc4',
          'tiếng anh4',
          'kỹ năng mềm4',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629ebee1fd31520018e58d30',
        name: 'Kinh doanh',
        description: 'Đây là nhóm Kinh doanh',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629f3db1fd31520018e5e920',
        name: 'Fullstack',
        description: 'Đây là nhóm Fullstack',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '62a6b117e189bb43b24ca105',
        name: 'Sale',
        description: 'Đây là nhóm Sale',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '6295bfd471ea517f1c2e4599',
        name: 'Marketing',
        description: '',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: 'j8dh45gd8js83nrh8dhs8h39',
        name: 'Kế toán',
        description: '',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: 'r7nh4ssd8js83nrhffhs2vb9',
        name: 'Trưởng phòng',
        description: '',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629aa6e9fd31520018e406b9',
        name: 'UI/UX',
        description: 'Đây là nhóm UI/UX',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629ebee1fd31520018e58d39',
        name: 'QC/QA',
        description: 'Đây là nhóm QC/QA',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629f3db1fd31520018e5e929',
        name: 'DBA',
        description: 'Đây là nhóm DBA',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '62a6b117e189bb43b24ca109',
        name: 'TA',
        description: '',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: 'r7nh4ssd8js83nrhffhs2vb0',
        name: 'Pending Pool-copy',
        description:
          'Đây là Talent Pool mặc định được hệ thống tự động tạo ra để lưu thông tin ứng viên trong trường hợp không thể tìm thấy bài đăng tuyển tương ứng.',
        competences: [
          'chơi1',
          'học1',
          'đá bóng1',
          'thể thao1',
          'âm nhạc1',
          'tiếng anh1',
          'kỹ năng mềm1',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: 'j8dh45gd8js83nrh8dhs8h3e',
        name: 'DevOps-copy',
        description: 'Đây là nhóm DevOps',
        competences: [
          'chơi2',
          'học2',
          'đá bóng2',
          'thể thao2',
          'âm nhạc2',
          'tiếng anh2',
          'kỹ năng mềm2',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '6295bfd471ea517f1c2e4593',
        name: 'Hành chính - HR-copy',
        description: 'Đây là nhóm Hành chính - nhân sự',
        competences: [
          'chơi3',
          'học3',
          'đá bóng3',
          'thể thao3',
          'âm nhạ3c',
          'tiếng anh3',
          'kỹ năng mềm3',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629aa6e9fd31520018e406bb',
        name: 'BrSE-copy',
        description: 'Đây là nhóm BrSE',
        competences: [
          'chơi4',
          'học4',
          'đá bóng4',
          'thể thao4',
          'âm nhạc4',
          'tiếng anh4',
          'kỹ năng mềm4',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629aa6e9fd31520018e406bt',
        name: 'DevOps-copy',
        description: 'Đây là nhóm DevOps',
        competences: [
          'chơi4',
          'học4',
          'đá bóng4',
          'thể thao4',
          'âm nhạc4',
          'tiếng anh4',
          'kỹ năng mềm4',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629ebee1fd31520018e58d30',
        name: 'Kinh doanh-copy',
        description: 'Đây là nhóm Kinh doanh',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629f3db1fd31520018e5e920',
        name: 'Fullstack',
        description: 'Đây là nhóm Fullstack',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '62a6b117e189bb43b24ca105',
        name: 'Sale',
        description: 'Đây là nhóm Sale',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '6295bfd471ea517f1c2e4599',
        name: 'Marketing',
        description: '',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: 'j8dh45gd8js83nrh8dhs8h39',
        name: 'Kế toán',
        description: '',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: 'r7nh4ssd8js83nrhffhs2vb9',
        name: 'Trưởng phòng',
        description: '',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629aa6e9fd31520018e406b9',
        name: 'UI/UX',
        description: 'Đây là nhóm UI/UX',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629ebee1fd31520018e58d39',
        name: 'QC/QA',
        description: 'Đây là nhóm QC/QA',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '629f3db1fd31520018e5e929',
        name: 'DBA',
        description: 'Đây là nhóm DBA',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
    this.listCom.push(
      Object.assign(new ComFrame(), {
        id: '62a6b117e189bb43b24ca109',
        name: 'TA',
        description: '',
        competences: [
          'chơi',
          'học',
          'đá bóng',
          'thể thao',
          'âm nhạc',
          'tiếng anh',
          'kỹ năng mềm',
        ],
      })
    );
  }

  getListRecruit() {
    return this.http.get<ResponseObject>(
      `${this.urlPath + '/api/v1/job-news/get-all'}`
    );
  }
  create(newCom: ComFrame) {
    this.listCom.unshift(newCom);
    this.refresh();
  }
  update(newCom: ComFrame) {
    this.listCom.forEach((comFrame: ComFrame, idx: number) => {
      if (comFrame.id == newCom.id) {
        this.listCom[idx] = newCom;
        this.refresh();

        return;
      }
    });
  }
  delete(newCom: Recruit) {
    for (let i = 0; i < this.listCom.length; i++) {
      if (this.listRecruit[i] === newCom) {
        this.listCom.splice(i, 1);
      }
    }
    this.refresh();
  }

  deleteById(id: string) {
    this.listCom.forEach((comFrame: ComFrame, idx: number) => {
      if (comFrame.id == id) {
        this.listCom.splice(idx, 1);
      }
    });
    this.refresh();
  }

  public getComFrameInfo(id?: string): Observable<ComFrame | undefined> {
    if (!id) {
      return of(new ComFrame());
    }
    return of(this.listCom.find((item) => item.id === id));
  }
  public getRecruitInfo(id?: string): Observable<Recruit | undefined> {
    if (!id) {
      return of(new Recruit());
    }
    return of(this.listRecruit.find((item) => item.code === id));
  }
  public getRandomId(): string {
    let text = '';
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 24; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  public isComFrameExist(id: string) {
    return this.listRecruit.find((item) => item.code === id) ? true : false;
  }

  public getComFrame(id: string) {
    return this.listRecruit.find((item) => item.code === id);
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
