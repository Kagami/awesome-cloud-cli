## awesome-cloud-cli

A curated list of useful CLI tools for cloud file hostings.

### Download

Download file via terminal given link to particular cloud service. Currently only `gdrive` tool requires authentication.

| Hosting | Tool | Usage |
| --- | --- | --- |
| [Mega](https://mega.nz/) | [megatools](https://github.com/megous/megatools) | `megadl https://mega.nz/...` |
| [Baidu Cloud](http://pan.baidu.com/) | [pan-baidu-download](https://github.com/banbanchs/pan-baidu-download) | `pan download http://pan.baidu.com/...` |
| [Google Drive](https://www.google.com/drive/) | [gdrive](https://github.com/prasmussen/gdrive) | `gdrive download ABC123...` |
| [Amazon Cloud Drive](https://www.amazon.com/clouddrive/) | [acd_cli](https://github.com/yadayada/acd_cli) | *TODO* |
| [Yandex.Disk](https://disk.yandex.com/) | *TODO* | *TODO* |
| [Cloud Mail.Ru](https://cloud.mail.ru/) | *TODO* | *TODO* |

### Upload

*TODO: Upload file/directory to cloud hosting*

### Shorteners

Retrieve original link via terminal given particular URL shortener.

| Service | Usage |
| --- | --- |
| [goo.gl](https://goo.gl/), [sh.st](https://shorte.st/) | `curl -sIo/dev/null -w '%{redirect_url}' http://...` |
| [adf.ly, j.gs, q.gs](https://adf.ly/) | `curl -s http://adf.ly/... | awk -F\' '/ysmm/{print $2}' | python -c 'import sys;from base64 import b64decode;from functools import reduce;print(b64decode("".join(reduce(lambda acc,el: (acc[0],el[1]+acc[1]) if el[0]&1 else (acc[0]+el[1],acc[1]), enumerate(sys.stdin.read()), ("", ""))))[2:].decode("utf-8"))'` |

### Misc

* [Userscript for skipping ads on sh.st, adf.ly, j.gs and q.gs](k2nblog-ad-skipper.user.js)
* *TODO: Universal cloud downloader shell script*

### License

[CC0.](COPYING)
