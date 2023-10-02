import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  LoadingOutline,
  SearchOutline,
  SafetyCertificateOutline,
  TeamOutline,
  TagsOutline,
  DeleteOutline,
  LaptopOutline,
  UserAddOutline,
  UserOutline,
  KeyOutline,
  LockOutline,
  EyeInvisibleOutline,
  CaretDownOutline,
  CaretUpOutline,
  SaveOutline,
  CaretRightOutline

} from '@ant-design/icons-angular/icons';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline,LoadingOutline,SearchOutline,SafetyCertificateOutline,TeamOutline,TagsOutline,
  DeleteOutline,LaptopOutline,UserAddOutline,UserOutline,KeyOutline,LockOutline,EyeInvisibleOutline, CaretDownOutline, CaretUpOutline,SaveOutline,CaretRightOutline];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
