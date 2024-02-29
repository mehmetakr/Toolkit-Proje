# React + Vite

- Klasik redux'a göre daha az kod içerir.
- Redux thunk da daha fazla kod yazmak durumunda kalınabilir.
- configureStore(): ve createReducer() gibi ozellikler önemli
- Redux toolkitteki ozelliklerden biriside thunka göre aksiyon ve reducer işlemlerinin birlikte yapılabilmesidir.

- Dahili olarak thunk içerisinde gelir .Tanımlamamız gerekmıyor.
- Devtools eklentisi sayesinde proje geliştirirken store ' u reducer'ları action'ları izleyebiliyoruz..
- Veri yönetimi daha kolay oluyo

# Kurulum Kütüphanaleri

npm install react-redux

npm install @reduxjs/toolkit

# Slice

- Redux toolkitin içerisinde yer alan ve reducer'ı ve aksiyonları bir araya getiren yapıdır.(Aksiyon ve reducerlar birliktedir.)
  Redux thunk da bir store vardi ve o store içimde farklı reducerlar tanımlıydı (tam olarak fark budur.)

- Klasik redux thunk da aksiyonlar ayrı dosyada reducerlar ayrı dosyada bulunuyodu. Redux toolkitin slice özelliği ile aksiyonlarıda reducerları da slice yapısı oluşturuyo.

- Sadece aksiyonların adlarını yazıyoruz.

<h1>Proje Gif</h1>

<img src="./src/components/tookiy.gif">
# Toolkit-Proje
