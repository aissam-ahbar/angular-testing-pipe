# Angular Testing Pipe

```
----------------------------
# custom-uppercase.pipe.ts
----------------------------
@Pipe({ name: 'customUppercasePipe', pure: true })
export class CustomUppercasePipe implements PipeTransform {
  transform(input: string): string {
    return input.length === 0 ? '' : input.toUpperCase();
  }
}
```

```
----------------------------
# app.module.ts
----------------------------
@NgModule({
  declarations: [AppComponent, CustomUppercasePipe],
  imports: [BrowserModule],
  providers: [CustomUppercasePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```
----------------------------
# app.component.html
----------------------------
{{ 'Hello' | customUppercasePipe }}
```
