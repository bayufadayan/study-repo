import './App.css'
import Accordion from './components/Accordions';

function App() {

  const faqs = [
    {
      question: "Apakah produk ini memiliki jaminan?",
      answer:
        "Ya, kami memberikan jaminan garansi selama 1 tahun untuk produk kami."
    },
    {
      question: "Berapa lama waktu pengiriman rata-rata?",
      answer:
        "Waktu pengiriman rata-rata adalah 3-5 hari kerja, tergantung lokasi pengiriman."
    },
    {
      question: "Bagaimana cara mengembalikan barang yang rusak?",
      answer:
        "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian."
    },
    {
      question: "Bagaimana cara mengembalikan barang yang rusak?",
      answer:
        "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian."
    },
    {
      question: "Bagaimana cara mengembalikan barang yang rusak?",
      answer:
        "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian."
    },
    {
      question: "Bagaimana cara mengembalikan barang yang rusak?",
      answer:
        "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian."
    },
    {
      question: "Bagaimana cara mengembalikan barang yang rusak?",
      answer:
        "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian."
    },
    {
      question: "Bagaimana cara mengembalikan barang yang rusak?",
      answer:
        "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian."
    },
    {
      question: "Bagaimana cara mengembalikan barang yang rusak?",
      answer:
        "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian."
    },
    {
      question: "Bagaimana cara mengembalikan barang yang rusak?",
      answer:
        "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian."
    },
  ];

  return (
    <>
      <br /> <br />
      <div>
        <span>
            <a href="https://github.com/bayufadayan/study-repo/tree/main/codepolitan/Project%20and%20Case%20Study/Studi%20Kasus%20React%20JS%20Dasar%20-%20Simple%20Blog%20Web">
                Link Repository
            </a>
        </span>{" "} | 
            <a href="https://github.com/bayufadayan/">@bayufadayan</a>
      </div>

      <Accordion data={faqs}/>

    </>
  )
}

export default App
