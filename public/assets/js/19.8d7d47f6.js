(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{428:function(t,v,_){"use strict";_.r(v);var s=_(3),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"运输层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运输层"}},[t._v("#")]),t._v(" 运输层")]),t._v(" "),v("p",[t._v("运输层的两种协议：面向连接的TCP和面向无连接的UDP。")]),t._v(" "),v("h2",{attrs:{id:"运输层端口号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运输层端口号"}},[t._v("#")]),t._v(" 运输层端口号")]),t._v(" "),v("h3",{attrs:{id:"服务器端使用的端口号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务器端使用的端口号"}},[t._v("#")]),t._v(" 服务器端使用的端口号")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("熟知的端口号")]),t._v("："),v("strong",[t._v("0~1023")]),t._v("，IANA把这些端口号指派给TCP/IP体系中最重要的一些应用协议，例如：FTP使用21/20，HTTP使用80，DNS使用53，")]),t._v(" "),v("li",[v("strong",[t._v("登记端口号")]),t._v("："),v("strong",[t._v("1024~49151")]),t._v("，为没有熟知的端口号使用。使用这类端口号必须在IANA按照规定的手续登记，以防止重复。")])]),t._v(" "),v("h3",{attrs:{id:"客户端使用的端口号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#客户端使用的端口号"}},[t._v("#")]),t._v(" 客户端使用的端口号")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("短暂端口号")]),t._v("："),v("strong",[t._v("4912~65535")]),t._v("，留给各户进程选择暂时使用。当服务器进程收到客户进程的报文时，就知道了客户进程所使用的动态端口号。通信结束后，这个端口号可供其它客户进程以后使用。")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("IP 层的 ip 地址可以唯一标识主机，而 TCP 层协议和端口号可以唯一标识主机的一个进程，这样我们可以利用：「ip地址＋协议＋端口号」唯一标示网络中的一个进程。在一些场合，也把这种唯一标识的模式称为「套接字 (Socket)」")])]),v("h3",{attrs:{id:"运输层熟知端口号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运输层熟知端口号"}},[t._v("#")]),t._v(" 运输层熟知端口号")]),t._v(" "),v("p",[v("img",{attrs:{src:t.$withBase("/computer/026.png")}})]),t._v(" "),v("h3",{attrs:{id:"ip复用、分用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ip复用、分用"}},[t._v("#")]),t._v(" IP复用、分用")]),t._v(" "),v("p",[v("img",{attrs:{src:t.$withBase("/computer/027.png")}})]),t._v(" "),v("h2",{attrs:{id:"udp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[t._v("#")]),t._v(" UDP")]),t._v(" "),v("ul",[v("li",[t._v("UDP是无连接的")]),t._v(" "),v("li",[t._v("UDP使用尽最大努力交付，即不保证可靠交付")]),t._v(" "),v("li",[t._v("UDP是面向报文的")]),t._v(" "),v("li",[t._v("UDP没有拥塞控制")]),t._v(" "),v("li",[t._v("UDP支持一对一、一对多、多对一和多对多的交互通信")]),t._v(" "),v("li",[t._v("UDP首部开销小")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("UDP之间的通信要用到其端口号，但由于UDP的通信是无连接的，因此不需要使用套接字来建议连接（TCP需要）。")])]),v("h2",{attrs:{id:"tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),v("ul",[v("li",[t._v("面向连接的运输层协议")]),t._v(" "),v("li",[t._v("TCP连接只能点对点（一对一）")]),t._v(" "),v("li",[t._v("TCP提供可靠交付的服务")]),t._v(" "),v("li",[t._v("TCP提供全双工通信")]),t._v(" "),v("li",[t._v("面向子节流")])]),t._v(" "),v("h2",{attrs:{id:"tcp可靠传输的实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp可靠传输的实现"}},[t._v("#")]),t._v(" TCP可靠传输的实现")]),t._v(" "),v("ul",[v("li",[t._v("虽然发送发的发送窗口是根据接收方的接收窗口设置的，但在同一时刻，两个窗口的大小并不一定一样，因为网络传送窗口的值需要经历一定的时间滞后，并且发送方会根据网络的拥塞程度调整窗口的大小。")]),t._v(" "),v("li",[t._v("对于不按序到达数据如何处理，TCP并无明确规定。如果将无序的直接丢弃，那么接收窗口的实现比较简单，但会重复传递很多数据，TCP通常讲不按序到达的数据先临时放到接收窗口中，等到接收窗口缺少的字节收到之后，再按序交付到上层的应用进程。\nT- CP要求接收方必须要有累计确认和稍待确认机制，这样可以减小传输开销。接收方可以在自己要发送数据的时候把确认信息捎带上。TCP标准规定，确认推迟的时间不应该超过0.5秒。稍待确认很少发生。")]),t._v(" "),v("li",[t._v("TCP的通信是全双工通信。")])]),t._v(" "),v("h2",{attrs:{id:"tcp的连接建立"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp的连接建立"}},[t._v("#")]),t._v(" TCP的连接建立")]),t._v(" "),v("ul",[v("li",[t._v("TCP是面向连接的协议，它基于运输连接来传送TCP报文段。")]),t._v(" "),v("li",[t._v("TCP的连接的建立和释放是每一次面向连接必不可少的过程。")]),t._v(" "),v("li",[t._v("三个阶段：\n"),v("ul",[v("li",[t._v("建立TCP连接")]),t._v(" "),v("li",[t._v("数据传送")]),t._v(" "),v("li",[t._v("释放TCP连接")]),t._v(" "),v("li",[t._v("TCP的运输连接管理就是使连接的建立和释放都能正常地进行。")])])])]),t._v(" "),v("h2",{attrs:{id:"需要解决的三个问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#需要解决的三个问题"}},[t._v("#")]),t._v(" 需要解决的三个问题")]),t._v(" "),v("ul",[v("li",[t._v("使TCP双方能够确知对方的存在；")]),t._v(" "),v("li",[t._v("使TCP双方能够协商一些参数；")]),t._v(" "),v("li",[t._v("使TCP双方能够对运输实体资源进行分配。")])]),t._v(" "),v("h2",{attrs:{id:"arq"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#arq"}},[t._v("#")]),t._v(" ARQ")]),t._v(" "),v("p",[t._v("发送方每收到一个确认，就把发送窗口向前滑动一个分组的位置。")]),t._v(" "),v("h2",{attrs:{id:"tcp报文段的首部格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp报文段的首部格式"}},[t._v("#")]),t._v(" TCP报文段的首部格式")]),t._v(" "),v("p",[v("img",{attrs:{src:t.$withBase("/computer/031.png")}})]),t._v(" "),v("h3",{attrs:{id:"源端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#源端口"}},[t._v("#")]),t._v(" 源端口")]),t._v(" "),v("p",[t._v("16比特，标识发送该TCP报文段的应用进程；")]),t._v(" "),v("h3",{attrs:{id:"目的端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目的端口"}},[t._v("#")]),t._v(" 目的端口")]),t._v(" "),v("p",[t._v("16比特，标识接受该TCP报文段的应用进程。")]),t._v(" "),v("h3",{attrs:{id:"序号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#序号"}},[t._v("#")]),t._v(" 序号")]),t._v(" "),v("p",[t._v("在一个TCP连接中传送的子节流中的每一个字节都按顺序编号")]),t._v(" "),v("h3",{attrs:{id:"确认号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#确认号"}},[t._v("#")]),t._v(" 确认号")]),t._v(" "),v("p",[t._v("是期望收到对方下一个报文段的第一个数据字节的序号。同时也是对之前的所有数据的确认。\n"),v("img",{attrs:{src:t.$withBase("/computer/028.png")}})]),t._v(" "),v("h3",{attrs:{id:"数据偏移"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据偏移"}},[t._v("#")]),t._v(" 数据偏移")]),t._v(" "),v("p",[t._v("占4比特，以四字节为单位，指出TCP报文段首部的长度。最小值为5，最大为15。")]),t._v(" "),v("h3",{attrs:{id:"窗口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#窗口"}},[t._v("#")]),t._v(" 窗口")]),t._v(" "),v("p",[t._v("占16比特，以字节为单位。指出发送本报文段的一方的接收窗口。")]),t._v(" "),v("h3",{attrs:{id:"校验和"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#校验和"}},[t._v("#")]),t._v(" 校验和")]),t._v(" "),v("p",[t._v("检查范围是首部和数据载荷两部分。")]),t._v(" "),v("h3",{attrs:{id:"确认ack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#确认ack"}},[t._v("#")]),t._v(" 确认ACK")]),t._v(" "),v("p",[t._v("仅当AC=1时确认号字段才有效。取值为零时无效。TCP规定，在连接建立后所有传送的报文段都必须把ACK置1。")]),t._v(" "),v("h3",{attrs:{id:"推送psh"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#推送psh"}},[t._v("#")]),t._v(" 推送PSH")]),t._v(" "),v("p",[t._v("推送标志位，接收方的TCP收到该标志位为1的报文段会尽快上交应用进程，而不必等到接受缓存都填满后再向上交付。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("当两个应用进程进行交互式的通信时,有时在一端的应用进性希望在键入一个命令后立即就能够收到对方的响应，在这种情况下,TCP就可以使用推送(pusb)操作。这时,发送方 TCP 把 PSH 置1,并立即创建一个报文段发送出去。接收方在收到PSH=1的报文段，就尽快地交付接受应用进程，而不再等到整个缓存都填满了后再向上交付。")])]),v("h3",{attrs:{id:"复位rst"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复位rst"}},[t._v("#")]),t._v(" 复位RST")]),t._v(" "),v("p",[t._v("当RST=1时，表明TCP连接中出现严重差错，必须释放连接，然后重新建立运输连接。")]),t._v(" "),v("h3",{attrs:{id:"同步syn"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同步syn"}},[t._v("#")]),t._v(" 同步SYN")]),t._v(" "),v("p",[t._v("同步标志位，在TCP连接建立时用来同步序号")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("在连接建立时用来同步序号。当SYN=1而ACK=0时，表明这是一个连接请求报文段。对方若同意建立连接，则应在相应的报文段中使SYN=1和ACK=1。因此SYN置为1就表示这是一个连接请求或连接接受报文。")])]),v("h3",{attrs:{id:"终止fin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#终止fin"}},[t._v("#")]),t._v(" 终止FIN")]),t._v(" "),v("p",[t._v("用来释放一个连接。当 FIN=1时，表明此报文段的发送方的数据已发送完毕，并要求释放运输连接。")]),t._v(" "),v("h3",{attrs:{id:"urg"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#urg"}},[t._v("#")]),t._v(" URG")]),t._v(" "),v("p",[t._v("紧急标志位，取值为1时紧急指针字段有效；取值为零时无效。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("紧急指针：以字节为单位，指明紧急数据的长度。当发送方有紧急数据时，可将紧急数据插队到发送缓存的最前面，并立刻封装到一个TCP报文段中进行发送，紧急指针会指出本报文段数据载荷部分包含了多长的紧急数据，紧急数据之后是普通数据。接受方接受之后，可直接交付到进程，不会等待接收缓存都填满。")])]),v("p",[t._v("选项：")]),t._v(" "),v("ul",[v("li",[t._v("最大报文段长度MSS选项：TCP报文段数据载荷部分的最大长度。")]),t._v(" "),v("li",[t._v("窗口扩大选项：为了扩大窗口（提高吞吐率）。")]),t._v(" "),v("li",[t._v("时间戳选项：用来计算往返时间RTT，用来处理序号超范围的情况，又称为防止序号绕回PAWS")]),t._v(" "),v("li",[t._v("选择确认功能")])]),t._v(" "),v("h2",{attrs:{id:"tcp使用-三报文握手-建立连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp使用-三报文握手-建立连接"}},[t._v("#")]),t._v(" TCP使用“三报文握手”建立连接")]),t._v(" "),v("p",[v("img",{attrs:{src:t.$withBase("/computer/029.png")}}),t._v("\nSYN：同步位，表明这是一个TCP连接请求报文段。")]),t._v(" "),v("p",[t._v("seq：发送到哪个序号")]),t._v(" "),v("p",[t._v("ACK：确认位")]),t._v(" "),v("p",[t._v("ack：确认号字段，对发送方某一位置的确认")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("TCP的标准规定，SYN = 1的报文段不能携带数据，也要消耗掉一个序号。\nTCP的标准规定，普通的确认报文段如果不携带数据，则不消耗数据。")])]),v("h2",{attrs:{id:"tcp通过-四次报文挥手-来释放连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp通过-四次报文挥手-来释放连接"}},[t._v("#")]),t._v(" TCP通过“四次报文挥手”来释放连接")]),t._v(" "),v("p",[v("img",{attrs:{src:t.$withBase("/computer/030.png")}}),t._v("\nFIN：终止位，表明这是一个TCP的终止请求")]),t._v(" "),v("p",[t._v("TCP的标准规定，FIN = 1的报文段不能携带数据，也要消耗掉一个序号。")]),t._v(" "),v("h3",{attrs:{id:"tcp流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp流量控制"}},[t._v("#")]),t._v(" TCP流量控制")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("一般来说，我们总是希望数据传的快一些。但如果发送方传的过快会造成数据丢失。\n所谓流量控制就是不让发送方发的太快，让接收方来得及接收。\n利用滑动窗口可以很方便地在TCP连接上实现对发送方流量的控制\nTCP接收方利用自己的接收窗口的大小来限制发送方发送窗口的大小。\nTCP发送方收到接收方的零窗口通知后，应启动持续计时器。持续计时器超时后，向接收方发送零口探测报文。")])]),v("h3",{attrs:{id:"tcp的拥塞控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp的拥塞控制"}},[t._v("#")]),t._v(" TCP的拥塞控制")]),t._v(" "),v("p",[t._v("在某段时间，若对网络中某一资源的需求量超过了该资源所提供的可用部分，网络性能可能就要变坏。这种情况就叫做拥塞。在计算机网络中的链路容量（即带宽）、交换节点中的缓存和处理机等，都是网络的资源。\n若出现拥塞而不进行控制，整个网络的吞吐量将随输入的负荷的增大而下降。\n"),v("img",{attrs:{src:t.$withBase("/computer/032.png")}}),t._v("\n发送方维护一个叫做拥塞窗口cwnd的状态变量，其值取决于网络的拥塞程度，并且动态变化。只要网络没有出现网络拥塞就适当将拥塞窗口增加，如果网络出现阻塞，就将发送窗口减小一些。判断出现网络拥塞的依据是，有没有发生超时重传。发送方将拥塞窗口作为发送窗口。swnd，即swnd = cwnd。")]),t._v(" "),v("p",[t._v("维护一个慢开始门限ssthresh状态变量：")]),t._v(" "),v("p",[t._v("当cwnd < sssthesh时，使用慢开始算法；")]),t._v(" "),v("p",[t._v("当cwnd > sssthesh时，使用拥塞避免算法。")]),t._v(" "),v("p",[t._v("当cwnd = sssthesh时，可以使用慢开始算法，也可以使用拥塞避免算法。\n"),v("img",{attrs:{src:t.$withBase("/computer/033.png")}}),t._v("\n慢开始算法：成倍增加")]),t._v(" "),v("p",[t._v("拥塞避免：每次加一")]),t._v(" "),v("h4",{attrs:{id:"快重传"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快重传"}},[t._v("#")]),t._v(" 快重传：")]),t._v(" "),v("p",[t._v("有时，个别报文段会在运输中丢失，但实际上网络并没有发生拥塞，那么这将会降低传输效率。\n采用快重传可以让发送方尽早知道发生了某个报文段的丢失。\n所谓快重传，就是发送方尽快进行重传，而不是等到超时重传，因为一旦超时重传将会时拥塞窗口变为1\n要求接收方不要等待自己发送数据时才进行捎带确认，而是立即发送确认；\n即收到了失序的报文也立即对己收到的报文进行重复确认。\n发送方一旦收到3个连续的重复确认，就将相应的报文段立即重传，而不是等到报文段的超时器超时再重传。\n发送方一旦收到三个重复确认，就知道现在只是丢失了个别的报文段，于是不启动慢开始算法，而启动快恢复算法；")]),t._v(" "),v("h4",{attrs:{id:"快恢复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快恢复"}},[t._v("#")]),t._v(" 快恢复：")]),t._v(" "),v("p",[t._v("发送发九慢开始门限值和拥塞窗口值调整为当前窗口的一半；开始执行拥塞避免算法。\n也有的快恢复算法是现实把快恢复时的拥塞窗口再增大一些，即等于新的+3。\n"),v("img",{attrs:{src:t.$withBase("/computer/034.png")}})]),t._v(" "),v("h4",{attrs:{id:"习题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#习题"}},[t._v("#")]),t._v(" 习题")]),t._v(" "),v("p",[t._v("TCP的拥塞窗口cwnd大小与传输轮次n的关系如下所示：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("cwnd")]),t._v(" "),v("th",[t._v("1")]),t._v(" "),v("th",[t._v("2")]),t._v(" "),v("th",[t._v("4")]),t._v(" "),v("th",[t._v("8")]),t._v(" "),v("th",[t._v("16")]),t._v(" "),v("th",[t._v("32")]),t._v(" "),v("th",[t._v("33")]),t._v(" "),v("th",[t._v("34")]),t._v(" "),v("th",[t._v("35")]),t._v(" "),v("th",[t._v("36")]),t._v(" "),v("th",[t._v("37")]),t._v(" "),v("th",[t._v("38")]),t._v(" "),v("th",[t._v("39")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("n")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("6")]),t._v(" "),v("td",[t._v("7")]),t._v(" "),v("td",[t._v("8")]),t._v(" "),v("td",[t._v("9")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",[t._v("11")]),t._v(" "),v("td",[t._v("12")]),t._v(" "),v("td",[t._v("13")])]),t._v(" "),v("tr",[v("td",[t._v("cwnd")]),t._v(" "),v("td",[t._v("40")]),t._v(" "),v("td",[t._v("41")]),t._v(" "),v("td",[t._v("42")]),t._v(" "),v("td",[t._v("21")]),t._v(" "),v("td",[t._v("22")]),t._v(" "),v("td",[t._v("23")]),t._v(" "),v("td",[t._v("24")]),t._v(" "),v("td",[t._v("25")]),t._v(" "),v("td",[t._v("26")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("8")])]),t._v(" "),v("tr",[v("td",[t._v("n")]),t._v(" "),v("td",[t._v("14")]),t._v(" "),v("td",[t._v("15")]),t._v(" "),v("td",[t._v("16")]),t._v(" "),v("td",[t._v("17")]),t._v(" "),v("td",[t._v("18")]),t._v(" "),v("td",[t._v("19")]),t._v(" "),v("td",[t._v("20")]),t._v(" "),v("td",[t._v("21")]),t._v(" "),v("td",[t._v("22")]),t._v(" "),v("td",[t._v("23")]),t._v(" "),v("td",[t._v("24")]),t._v(" "),v("td",[t._v("25")]),t._v(" "),v("td",[t._v("26")])])])]),t._v(" "),v("p",[t._v("（1）试画出如图5-25所示的拥塞窗口与传输轮次的关系曲线。\n（2）指明TCP工作在慢开始阶段的时间间隔。\n（3）指明TCP工作在拥塞避免阶段的时间间隔。\n（4）在第16轮次和第22轮次之后发送方是通过收到三个重复的确认还是通过超市检测到丢失了报文段？\n（5）在第1轮次，第18轮次和第24轮次发送时，门限ssthresh分别被设置为多大？\n（6）在第几轮次发送出第70个报文段？\n（7）假定在第26轮次之后收到了三个重复的确认，因而检测出了报文段的丢失，那么拥塞窗口cwnd和门限ssthresh应设置为多大？")]),t._v(" "),v("p",[t._v("答：（1）拥塞窗口与传输轮次的关系曲线\n（2） 慢开始时间间隔：【1，6】和【23，26】\n（3） 拥塞避免时间间隔：【6，16】和【17，22】\n（4） 在第16轮次之后发送方通过收到三个重复的确认检测到丢失的报文段。在第22轮次之后发送方是通过超时检测到丢失的报文段。\n（5） 在第1轮次发送时，门限ssthresh被设置为32  在第18轮次发送时，门限ssthresh被设置为发生拥塞时的一半，即21. 在第24轮次发送时，门限ssthresh是第18轮次发送时设置的21（6） 第70报文段在第7轮次发送出。（7） 拥塞窗口cwnd和门限ssthresh应设置为8的一半，即4.")]),t._v(" "),v("h2",{attrs:{id:"tcp超时时间重传时间的选择-不考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp超时时间重传时间的选择-不考"}},[t._v("#")]),t._v(" TCP超时时间重传时间的选择（不考）")]),t._v(" "),v("h3",{attrs:{id:"加权平均往返时间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加权平均往返时间"}},[t._v("#")]),t._v(" 加权平均往返时间")]),t._v(" "),v("p",[v("img",{attrs:{src:t.$withBase("/computer/035.png")}})]),t._v(" "),v("h3",{attrs:{id:"超时重传时间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#超时重传时间"}},[t._v("#")]),t._v(" 超时重传时间")]),t._v(" "),v("p",[v("img",{attrs:{src:t.$withBase("/computer/036.png")}}),t._v("\n如果出现超时重传，那么发送方会发送两次报文，因为发送方无法判断是对哪一次发送信息的确认信息，所以无法确认往返时间RTT，因此Karn提出一个算法，只要报文重传了，就不参与计算。但是如果是因为报文段的时延突然增大很多，这就会导致重传时间无法更新。因此修正的方法是报文段每重传一次，就把超时重传时间RTO增加为原来的两倍。")])])}),[],!1,null,null,null);v.default=a.exports}}]);