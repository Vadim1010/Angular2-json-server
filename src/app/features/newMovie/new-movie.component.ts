import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MoviesResourceService } from '../../core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { InterfaceForm } from './interface-form';

@Component({
  selector: 'mv-new-movie',
  templateUrl: 'new-movie.component.html',
  styleUrls: ['new-movie.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NewMovieComponent implements OnInit, OnDestroy {
  newMovieForm: FormGroup;
  subscription: Subscription;

  formErrors = {
    title: '',
    posterUrl: '',
    genres: '',
    actors: '',
    director: '',
    description: ''
  };

  validationMassages = {
    title: {
      required: 'Required field'
    },
    posterUrl: {
      required: 'Required field',
      pattern: 'No correct url img'
    },
    genres: {
      required: 'Required field'
    },
    actors: {
      required: 'Required field'
    },
    director: {
      required: 'Required field'
    },
    description: {
      required: 'Required field',
      minlength: 'Direcdescriptiontor must be greater than 5 characters',
      maxlength: 'Direcdescriptiontor must be less than 200 characters'
    }
  };

  constructor(private fb: FormBuilder,
              private moviesResourceService: MoviesResourceService,
              private  router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.newMovieForm = this.fb.group({
      title: ['',
        Validators.required
      ],
      posterUrl: ['',
        [Validators.required,
          Validators.pattern(/^https?:\/\/[^\s]+(?=.(jpe?g|png|gif)).\1$/)
        ]
      ],
      genres: ['',
        Validators.required
      ],
      actors: ['',
        Validators.required
      ],
      director: ['',
        Validators.required
      ],
      description: ['',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(200)
        ]
      ],
      likes: [0],
      stars: [0]
    });

    this.newMovieForm.valueChanges.subscribe(() => {
      this.onValueChanges();
    });

  }

  onValueChanges(data?: InterfaceForm): void {
    for (let field of Object.keys(this.formErrors)) {
      this.formErrors[field] = '';
      let control = this.newMovieForm.get(field);

      if (control && control.dirty && !control.valid) {
        let message = this.validationMassages[field];
        let error = Object.keys(control.errors)[0];
        this.formErrors[field] = message[error];

      }
    }
  }

  onSabmite(form: FormGroup): void {
    this.subscription = this.moviesResourceService.addNewMovie(form.value).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
