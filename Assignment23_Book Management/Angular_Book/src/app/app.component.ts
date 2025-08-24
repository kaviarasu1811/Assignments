import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: any[] = [];   // ✅ initialize this
  newBookObj: any = { name: '', author: '', year: '', language: '' };

  newBook(form: any) {
    if (form.valid) {
      this.books.push({ ...this.newBookObj });
      this.newBookObj = { name: '', author: '', year: '', language: '' };
      form.resetForm();
    }
  }
}