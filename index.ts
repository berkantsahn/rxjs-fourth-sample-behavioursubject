import './style.css';
import { of, map, Observable, Subject, BehaviorSubject } from 'rxjs';

//observable, subject, behaviorSubject

const observable = new Observable<string>((subscriber) => {
  subscriber.next('1');
  subscriber.next('2');
});

// her seferinde farklı bir çalışma ortamı üzerinde çalışma yapılacağı için
// alttaki kod satırları farklı birer bilgi oluşturur
observable.subscribe((data) => console.log(data));
observable.subscribe((data) => console.log(data));

// aynı bilgilerin aynı anda eş zamanlı olarak gönderilmesi için
const subject = new Subject();

// subject üzerinde yapılan bir güncelleme subjecti dinleyen bütün takipçilere aynı şekilde iletilir
// datalar mevcut olan istemcilere gönderilir. Bu sebeple önce istemciler oluşturulmalı ve datalar ondan
// sonra gönderilmelidir. İstemciler oluşturulmadan gönderilen dataları istemci görememektedir.

// örneğin altta 2 adet data gönderdik ve istemcileri sonrasında oluşturduk.
// istemciler yukarıda oluşturulan ilk iki datayı görüntüleyemeyecek ve altta istemciler
// oluşturulduktan sonra gönderilen dataları görüntüleyebilecektir

subject.next(0);
subject.next(Math.random());

// veri akışına farklı kanallar açtık
subject.subscribe((data) => console.log(data));
subject.subscribe((data) => console.log(data));
subject.subscribe((data) => console.log(data));

subject.next(1);
subject.next(Math.random());

// eğer yukarıdaki gibi önceden oluşturulan datalarıda görüntülemek istiyorsak
// behaviourSubject kullanmalıyız. BehaviourSubject zorunlu olarak bir başlangıç değeri istemektedir
// başlangıç değerimizi parantez içerisinde belirtiyoruz

const behaviourSubject = new BehaviorSubject(-1);

behaviourSubject.next(0);
behaviourSubject.next(Math.random());

behaviourSubject.subscribe((data) => console.log(data));
behaviourSubject.subscribe((data) => console.log(data));

behaviourSubject.next(1);
behaviourSubject.next(Math.random());
